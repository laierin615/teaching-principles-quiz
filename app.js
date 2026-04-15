// ===== 教學原理複習 App =====
// 狀態管理
const state = {
  currentPage: 'dashboard',
  quiz: {
    pool: [],
    current: 0,
    answered: false,
    score: 0,
    combo: 0,
    maxCombo: 0,
    correctCount: 0,
    wrongCount: 0,
    sessionWrong: [],
    mode: 'all', // 'all' | 'wrong'
    selectedChapters: [1,2,3,4,5,6,7],
  }
};

// localStorage keys
const STORAGE_KEYS = {
  progress: 'tpq_progress',   // { chapterId: { correct, wrong, total } }
  wrongQ: 'tpq_wrong',        // Set of question ids
  scores: 'tpq_scores',       // Array of past scores
};

// ===== Utility =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveStorage(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== Navigation =====
function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');
  document.querySelector(`.nav-tab[data-page="${page}"]`)?.classList.add('active');
  state.currentPage = page;
  if (page === 'dashboard') renderDashboard();
  if (page === 'wrong') renderWrongList();
}

// ===== Dashboard =====
function renderDashboard() {
  const progress = loadStorage(STORAGE_KEYS.progress, {});
  const wrongQs = loadStorage(STORAGE_KEYS.wrongQ, []);
  const scores = loadStorage(STORAGE_KEYS.scores, []);

  let totalCorrect = 0, totalAttempts = 0;
  Object.values(progress).forEach(c => {
    totalCorrect += c.correct || 0;
    totalAttempts += (c.correct || 0) + (c.wrong || 0);
  });
  const accuracy = totalAttempts > 0 ? Math.round(totalCorrect / totalAttempts * 100) : 0;
  const bestScore = scores.length > 0 ? Math.max(...scores) : 0;

  document.getElementById('stat-total').textContent = totalAttempts;
  document.getElementById('stat-accuracy').textContent = accuracy + '%';
  document.getElementById('stat-wrong').textContent = wrongQs.length;
  document.getElementById('stat-best').textContent = bestScore;

  // Chapter progress bars
  const chContainer = document.getElementById('chapter-rows');
  chContainer.innerHTML = '';
  Object.entries(CHAPTER_INFO).forEach(([ch, info]) => {
    const chData = progress[ch] || { correct: 0, wrong: 0 };
    const chTotal = QUESTIONS.filter(q => q.chapter == ch).length;
    const chAttempts = (chData.correct || 0) + (chData.wrong || 0);
    const chAcc = chAttempts > 0 ? Math.round(chData.correct / chAttempts * 100) : 0;
    const row = document.createElement('div');
    row.className = 'chapter-row';
    row.innerHTML = `
      <div class="chapter-row-label">
        <span style="font-weight:600;">${info.name}</span>
        <span style="color:var(--text-light)">${chData.correct||0}/${chTotal} 題 · 正確率 ${chAcc}%</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${chAcc}%; background:${info.color}"></div>
      </div>`;
    chContainer.appendChild(row);
  });
}

// ===== Quiz Setup =====
function buildChapterChips() {
  const container = document.getElementById('chapter-chips');
  container.innerHTML = '';
  Object.entries(CHAPTER_INFO).forEach(([ch, info]) => {
    const chip = document.createElement('div');
    chip.className = 'chip' + (state.quiz.selectedChapters.includes(Number(ch)) ? '' : ' inactive');
    chip.textContent = `Ch${ch}`;
    chip.style.background = info.color;
    chip.dataset.ch = ch;
    chip.addEventListener('click', () => {
      const n = Number(ch);
      const idx = state.quiz.selectedChapters.indexOf(n);
      if (idx > -1) {
        if (state.quiz.selectedChapters.length > 1) {
          state.quiz.selectedChapters.splice(idx, 1);
          chip.classList.add('inactive');
        } else {
          showToast('至少選擇一個章節');
        }
      } else {
        state.quiz.selectedChapters.push(n);
        chip.classList.remove('inactive');
      }
    });
    container.appendChild(chip);
  });
}

function startQuiz(mode) {
  state.quiz.mode = mode;
  let pool;
  if (mode === 'wrong') {
    const wrongIds = new Set(loadStorage(STORAGE_KEYS.wrongQ, []));
    pool = QUESTIONS.filter(q => wrongIds.has(q.id));
    if (pool.length === 0) {
      showToast('還沒有錯題，先做練習吧！');
      return;
    }
  } else {
    pool = QUESTIONS.filter(q => state.quiz.selectedChapters.includes(q.chapter));
    if (pool.length === 0) {
      showToast('請至少選擇一個章節');
      return;
    }
  }

  state.quiz.pool = shuffle(pool);
  state.quiz.current = 0;
  state.quiz.score = 0;
  state.quiz.combo = 0;
  state.quiz.maxCombo = 0;
  state.quiz.correctCount = 0;
  state.quiz.wrongCount = 0;
  state.quiz.sessionWrong = [];
  state.quiz.answered = false;

  document.getElementById('result-screen').classList.remove('show');
  document.getElementById('quiz-area').style.display = 'block';
  goTo('quiz');
  renderQuestion();
}

// ===== Render Question =====
function renderQuestion() {
  const q = state.quiz.pool[state.quiz.current];
  const total = state.quiz.pool.length;
  const idx = state.quiz.current;

  state.quiz.answered = false;

  // Meta bar
  document.getElementById('quiz-progress').textContent = `${idx + 1} / ${total}`;
  document.getElementById('score-display').textContent = `${state.quiz.score} 分`;

  const combo = state.quiz.combo;
  const comboBadge = document.getElementById('combo-badge');
  if (combo >= 2) {
    comboBadge.textContent = `🔥 連對 ${combo} 題 ×${getMultiplier(combo)}`;
    comboBadge.classList.add('show');
  } else {
    comboBadge.classList.remove('show');
  }

  // Chapter tag
  const info = CHAPTER_INFO[q.chapter];
  document.getElementById('question-tag').textContent = `Ch${q.chapter}`;
  document.getElementById('question-tag').style.background = info.color;

  // Question
  document.getElementById('question-text').textContent = q.question;

  // Options
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.dataset.val = opt[0]; // A/B/C/D
    btn.addEventListener('click', () => handleAnswer(btn, q));
    optionsList.appendChild(btn);
  });

  // Explanation hidden
  document.getElementById('explanation-box').classList.remove('show');
  document.getElementById('explanation-text').textContent = '';

  // Nav buttons
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-skip').style.display = idx < total - 1 ? 'inline-flex' : 'none';
  document.getElementById('btn-end').style.display = 'inline-flex';
}

function getMultiplier(combo) {
  if (combo >= 5) return '3';
  if (combo >= 3) return '2';
  return '1.5';
}

function getPoints(combo) {
  if (combo >= 5) return 30;
  if (combo >= 3) return 20;
  if (combo >= 2) return 15;
  return 10;
}

function handleAnswer(btn, q) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const chosen = btn.dataset.val;
  const isCorrect = chosen === q.answer;

  // Disable all options
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.val === q.answer) b.classList.add('correct');
  });
  if (!isCorrect) btn.classList.add('wrong');

  // Show explanation
  document.getElementById('explanation-text').textContent = q.explanation;
  document.getElementById('explanation-box').classList.add('show');

  // Update score & progress
  const progress = loadStorage(STORAGE_KEYS.progress, {});
  if (!progress[q.chapter]) progress[q.chapter] = { correct: 0, wrong: 0 };

  const wrongQs = new Set(loadStorage(STORAGE_KEYS.wrongQ, []));

  if (isCorrect) {
    state.quiz.combo++;
    state.quiz.maxCombo = Math.max(state.quiz.maxCombo, state.quiz.combo);
    const pts = getPoints(state.quiz.combo);
    state.quiz.score += pts;
    state.quiz.correctCount++;
    progress[q.chapter].correct = (progress[q.chapter].correct || 0) + 1;
    wrongQs.delete(q.id);
    showToast(`✓ 答對！+${pts} 分`);
  } else {
    state.quiz.combo = 0;
    state.quiz.score = Math.max(0, state.quiz.score - 5);
    state.quiz.wrongCount++;
    progress[q.chapter].wrong = (progress[q.chapter].wrong || 0) + 1;
    wrongQs.add(q.id);
    state.quiz.sessionWrong.push(q);
    showToast('✗ 答錯了，看看解析吧');
  }

  saveStorage(STORAGE_KEYS.progress, progress);
  saveStorage(STORAGE_KEYS.wrongQ, [...wrongQs]);
  document.getElementById('score-display').textContent = `${state.quiz.score} 分`;

  // Update combo badge
  const combo = state.quiz.combo;
  const comboBadge = document.getElementById('combo-badge');
  if (combo >= 2) {
    comboBadge.textContent = `🔥 連對 ${combo} 題`;
    comboBadge.classList.add('show');
  } else {
    comboBadge.classList.remove('show');
  }

  // Show next button
  document.getElementById('btn-next').style.display = 'inline-flex';
}

function nextQuestion() {
  state.quiz.current++;
  if (state.quiz.current >= state.quiz.pool.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function skipQuestion() {
  state.quiz.combo = 0;
  state.quiz.current++;
  if (state.quiz.current >= state.quiz.pool.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  document.getElementById('quiz-area').style.display = 'none';
  const result = document.getElementById('result-screen');
  result.classList.add('show');

  const total = state.quiz.pool.length;
  const correct = state.quiz.correctCount;
  const acc = total > 0 ? Math.round(correct / total * 100) : 0;

  let emoji = '😢', msg = '湯姆說：繼續加油唷！';
  if (acc >= 90) { emoji = '🏆'; msg = '湯姆說：你是教學原理的達人！'; }
  else if (acc >= 75) { emoji = '🎉'; msg = '伊莎貝說：表現得很棒呢！'; }
  else if (acc >= 60) { emoji = '💪'; msg = '布雷瑟說：再多練幾次吧！'; }
  else if (acc >= 40) { emoji = '🍄'; msg = '湯姆說：多複習幾遍唷～'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-score-num').textContent = state.quiz.score;
  document.getElementById('result-correct').textContent = correct;
  document.getElementById('result-wrong').textContent = state.quiz.wrongCount;
  document.getElementById('result-combo').textContent = state.quiz.maxCombo;
  document.getElementById('result-acc').textContent = acc + '%';

  // Save score
  const scores = loadStorage(STORAGE_KEYS.scores, []);
  scores.push(state.quiz.score);
  if (scores.length > 20) scores.shift();
  saveStorage(STORAGE_KEYS.scores, scores);
}

// ===== Wrong Questions List =====
function renderWrongList() {
  const wrongIds = new Set(loadStorage(STORAGE_KEYS.wrongQ, []));
  const container = document.getElementById('wrong-list');
  container.innerHTML = '';

  if (wrongIds.size === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🌿</div>
        <p>太棒了！錯題牆空空的～<br>先去做任務，錯題會自動記錄在這裡 🦝</p>
      </div>`;
    return;
  }

  const wrongQs = QUESTIONS.filter(q => wrongIds.has(q.id));
  wrongQs.forEach(q => {
    const info = CHAPTER_INFO[q.chapter];
    const div = document.createElement('div');
    div.className = 'wrong-item';
    div.innerHTML = `
      <div class="wrong-item-meta">
        <span style="background:${info.color};color:white;padding:3px 10px;border-radius:99px;font-size:0.72rem;font-weight:800;box-shadow:0 2px 0 rgba(0,0,0,0.2)">Ch${q.chapter}</span>
      </div>
      <div class="wrong-item-q">${q.question}</div>
      <div class="wrong-item-correct">🍃 正確答案：${q.answer}. ${q.options.find(o=>o.startsWith(q.answer+'.'))?.substring(3)||''}</div>
      <div class="wrong-item-expl">🦉 ${q.explanation}</div>`;
    container.appendChild(div);
  });
}

function clearWrongQuestions() {
  if (confirm('確定要清除所有錯題記錄嗎？')) {
    saveStorage(STORAGE_KEYS.wrongQ, []);
    renderWrongList();
    showToast('已清除錯題記錄');
  }
}

function resetAllProgress() {
  if (confirm('確定要重置所有學習記錄嗎？（此操作不可恢復）')) {
    localStorage.removeItem(STORAGE_KEYS.progress);
    localStorage.removeItem(STORAGE_KEYS.wrongQ);
    localStorage.removeItem(STORAGE_KEYS.scores);
    renderDashboard();
    showToast('已重置所有紀錄');
  }
}

// ===== Search =====
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function highlight(text, keyword) {
  if (!keyword) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const escapedKw = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escaped.replace(new RegExp(`(${escapedKw})`, 'gi'), '<mark class="search-highlight">$1</mark>');
}

function renderSearchResults(keyword) {
  const container = document.getElementById('search-results');
  const hint = document.getElementById('search-hint');
  const kw = keyword.trim();

  if (!kw) {
    container.innerHTML = '';
    hint.textContent = '輸入關鍵字後，相關題目與解答會顯示在下方 🌿';
    hint.style.display = '';
    return;
  }

  hint.style.display = 'none';
  const kwLower = kw.toLowerCase();

  const matched = QUESTIONS.filter(q => {
    const searchable = [q.question, q.explanation, ...q.options].join(' ').toLowerCase();
    return searchable.includes(kwLower);
  });

  if (matched.length === 0) {
    container.innerHTML = `
      <div class="search-no-result">
        <div class="icon">🍂</div>
        <div>找不到「${escapeHtml(kw)}」相關題目<br><span style="font-size:0.82rem">試試別的關鍵字吧！</span></div>
      </div>`;
    return;
  }

  const info = CHAPTER_INFO;
  container.innerHTML = `<div style="text-align:center"><span class="search-count-tag">找到 ${matched.length} 題</span></div>`;

  matched.forEach(q => {
    const chInfo = info[q.chapter];
    const correctOpt = q.options.find(o => o.startsWith(q.answer + '.')) || '';
    const correctText = correctOpt.substring(2).trim();

    const item = document.createElement('div');
    item.className = 'search-result-item';

    const optionsHtml = q.options.map(o => {
      const isCorrect = o.startsWith(q.answer + '.');
      return `<div class="${isCorrect ? 'opt-correct' : ''}">${isCorrect ? '✅ ' : '　'}${highlight(o, kw)}</div>`;
    }).join('');

    item.innerHTML = `
      <div class="search-result-header">
        <span style="background:${chInfo.color};color:white;padding:2px 9px;border-radius:99px;font-size:0.72rem;font-weight:800;flex-shrink:0;margin-top:2px">Ch${q.chapter}</span>
        <div class="search-result-q">${highlight(q.question, kw)}</div>
        <span class="search-result-toggle">▼</span>
      </div>
      <div class="search-result-body">
        <div class="search-options">${optionsHtml}</div>
        <div class="search-answer-line">正確答案 <span>${q.answer}. ${escapeHtml(correctText)}</span></div>
        <div class="search-expl">🦉 ${highlight(q.explanation, kw)}</div>
      </div>`;

    item.querySelector('.search-result-header').addEventListener('click', () => {
      item.classList.toggle('open');
    });

    container.appendChild(item);
  });
}

function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  let debounceTimer;
  input.addEventListener('input', () => {
    const val = input.value;
    clearBtn.classList.toggle('visible', val.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderSearchResults(val), 250);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    renderSearchResults('');
    input.focus();
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => goTo(tab.dataset.page));
  });

  // Build chapter chips
  buildChapterChips();

  // Quiz buttons
  document.getElementById('btn-start-all').addEventListener('click', () => startQuiz('all'));
  document.getElementById('btn-start-wrong').addEventListener('click', () => startQuiz('wrong'));
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  document.getElementById('btn-skip').addEventListener('click', skipQuestion);
  document.getElementById('btn-end').addEventListener('click', () => {
    if (confirm('確定要結束本次練習嗎？')) showResult();
  });
  document.getElementById('btn-restart').addEventListener('click', () => startQuiz(state.quiz.mode));
  document.getElementById('btn-go-dash').addEventListener('click', () => goTo('dashboard'));
  document.getElementById('btn-clear-wrong').addEventListener('click', clearWrongQuestions);
  document.getElementById('btn-reset').addEventListener('click', resetAllProgress);
  document.getElementById('btn-dash-start').addEventListener('click', () => {
    goTo('quiz');
    startQuiz('all');
  });

  // Init search
  initSearch();

  // Init dashboard
  renderDashboard();
  goTo('dashboard');
});
