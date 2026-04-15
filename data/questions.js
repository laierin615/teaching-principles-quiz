const QUESTIONS = [
  // ===== 第一章 緒論 =====
  {
    id: 1, chapter: 1, type: "MC",
    question: "Peters 提出與教學有關的三大規準，以下哪一項不屬於這三大規準？",
    options: ["A. 認知性", "B. 志願性", "C. 覺知性", "D. 實踐性"],
    answer: "D",
    explanation: "Peters 的教學三大規準為：①認知性（傳遞有知識價值的內容）、②志願性（尊重學生意願）、③覺知性（學生能理解所學）。「實踐性」不在其中。"
  },
  {
    id: 2, chapter: 1, type: "MC",
    question: "Glaser 的 GMI 一般教學模式（General Model of Instruction），以下哪一項是正確的步驟順序？",
    options: ["A. 教學目標→教學程序→起點行為→成果評量→回饋", "B. 教學目標→起點行為→教學程序→成果評量→回饋", "C. 起點行為→教學目標→教學程序→成果評量→回饋", "D. 教學目標→成果評量→起點行為→教學程序→回饋"],
    answer: "B",
    explanation: "GMI 的正確步驟：教學目標（確立方向）→ 起點行為評估（了解學生現況）→ 教學程序（設計活動）→ 成果評量（檢驗目標達成）→ 回饋（修正依據）。"
  },
  {
    id: 3, chapter: 1, type: "MC",
    question: "根據 Borich 的研究，下列哪一項「不是」有效教師教學行為的五大關鍵元素？",
    options: ["A. 講課清晰", "B. 教學多樣", "C. 以考試為導向", "D. 確保學生成功率"],
    answer: "C",
    explanation: "Borich 五大有效教學行為：講課清晰、教學多樣、投入教學（高任務時間）、引導學生積極參與、確保學生成功率。「以考試為導向」不在其中，且不符合有效教學的精神。"
  },
  {
    id: 4, chapter: 1, type: "MC",
    question: "教師對學生抱持高度期望，學生因而表現進步，這種現象被稱為？",
    options: ["A. 馬太效應", "B. 比馬龍效應", "C. 月暈效應", "D. 霍桑效應"],
    answer: "B",
    explanation: "比馬龍效應（Pygmalion Effect），又稱教師期望效應，由 Rosenthal & Jacobson（1968）提出。教師對學生的高期望能提升學生實際表現。馬太效應指強者愈強；月暈效應是以局部評估整體；霍桑效應指受到觀察時表現改善。"
  },
  {
    id: 5, chapter: 1, type: "MC",
    question: "下列有關「教學」（teaching）與「訓練」（training）的比較，何者正確？",
    options: ["A. 教學與訓練都重視理解與意義建構", "B. 訓練偏重技能的反覆操練，教學則兼顧認知理解", "C. 教學比訓練更強調行為的增強", "D. 訓練與教學均以認知改變為目標"],
    answer: "B",
    explanation: "訓練強調行為主義的技能反覆操練（如軍事訓練、駕駛訓練）；教學則涵蓋認知理解、態度改變與意義建構。"
  },
  {
    id: 6, chapter: 1, type: "MC",
    question: "下列哪一項「違反」了 Peters 的「認知性規準」？",
    options: ["A. 教師要求學生背誦公式而不解釋原理", "B. 教師用生活例子說明抽象概念", "C. 教師允許學生提問並給予詳細解答", "D. 教師設計讓學生主動探索的學習活動"],
    answer: "A",
    explanation: "認知性規準強調學生應能「理解」所學內容的意義，而非機械記憶。只要求背誦公式而不解釋原理，違反了認知性（學生無法理解知識的意義）。"
  },

  // ===== 第二章 學習理論 =====
  {
    id: 7, chapter: 2, type: "MC",
    question: "Carroll 的學校學習模式中，「需要學習的時間」包含哪三項因素？",
    options: ["A. 性向、努力、機會", "B. 性向、教學品質、理解教學的能力", "C. 機會、毅力、教學品質", "D. 性向、機會、理解教學的能力"],
    answer: "B",
    explanation: "Carroll模式：「需要學習的時間」= 性向（aptitude）+ 教學品質 + 理解教學的能力。「實際投入的學習時間」= 機會 + 毅力。"
  },
  {
    id: 8, chapter: 2, type: "MC",
    question: "Bloom 的精熟學習法中，「校正活動（Corrective Activity）」主要指的是？",
    options: ["A. 充實活動，讓已精熟的學生繼續挑戰", "B. 補救教學，針對未達精熟標準的學生", "C. 形成性評量，診斷學生學習狀況", "D. 總結性評量，評定學生學期成績"],
    answer: "B",
    explanation: "校正活動（Corrective Activity）= 補救教學。在形成性評量後，針對未達精熟標準（通常80-90%）的學生，以不同教學方式重新教導。已精熟者進行「充實活動（Enrichment）」。"
  },
  {
    id: 9, chapter: 2, type: "MC",
    question: "依據 Bruner 的認知表徵理論，國中生在學習時主要運用哪些表徵方式？",
    options: ["A. 動作表徵", "B. 圖像表徵", "C. 符號表徵", "D. 圖像表徵和符號表徵"],
    answer: "D",
    explanation: "Bruner三種表徵：動作（幼兒）→ 圖像（小學）→ 符號（國中以上）。國中生已進入符號表徵階段，但仍保留圖像輔助，故兩者兼用。"
  },
  {
    id: 10, chapter: 2, type: "MC",
    question: "Ausubel 意義教學中的「前導組體（Advanced Organizer）」，主要功能是？",
    options: ["A. 在課後複習時使用，強化長期記憶", "B. 在新教材呈現前，提供較高層次的概念框架，連結新舊知識", "C. 用於評量學生的先備知識", "D. 取代教師的講解，讓學生自主閱讀"],
    answer: "B",
    explanation: "前導組體（Advanced Organizer）在教學前提供，目的是建立「認知橋樑」，幫助學生將新知識連結到已有的認知結構，促進有意義的學習（而非機械記憶）。"
  },
  {
    id: 11, chapter: 2, type: "MC",
    question: "Vygotsky 的「近側發展區（ZPD）」是指？",
    options: ["A. 學生能獨立完成的學習任務範圍", "B. 學生在教師指導下才能完成的任務範圍", "C. 學生的實際發展水準與潛在發展水準之間的差距", "D. 教師評估學生能力後所規劃的教學範圍"],
    answer: "C",
    explanation: "ZPD（Zone of Proximal Development）= 「學生目前能獨立完成的水準」與「在成人/同儕協助下能達到的水準」之間的差距。鷹架教學就是在ZPD內提供支持，促進潛在發展。"
  },
  {
    id: 12, chapter: 2, type: "MC",
    question: "Bandura 社會學習論中，楷模學習的四個階段順序為？",
    options: ["A. 保留→注意→再生→動機", "B. 注意→保留→再生→動機", "C. 注意→動機→保留→再生", "D. 動機→注意→保留→再生"],
    answer: "B",
    explanation: "班杜拉楷模學習四階段：①注意（Attention）→②保留（Retention）→③再生/再現（Reproduction）→④動機（Motivation）。先「看到」，再「記住」，再「模仿」，最後「想不想模仿」。"
  },
  {
    id: 13, chapter: 2, type: "MC",
    question: "根據 Gardner 的多元智能理論，下列哪些智能較常被忽略，但在108課綱的素養導向教學中應受到重視？（多選擇一最完整的答案）",
    options: ["A. 語文、邏輯數學、空間", "B. 肢體動覺、人際、內省、自然觀察", "C. 音樂、空間、語文、邏輯數學", "D. 語文、音樂、人際、邏輯數學"],
    answer: "B",
    explanation: "Gardner 八種智能中，「語文、邏輯數學、空間、音樂」是傳統教學較重視的，而「肢體動覺、人際、內省、自然觀察」相對較被忽略，是108課綱素養導向教學應著力的面向。"
  },
  {
    id: 14, chapter: 2, type: "MC",
    question: "「組塊化（Chunking）」是訊息處理理論中，克服哪個記憶限制的重要技術？",
    options: ["A. 感官記憶容量不足", "B. 工作記憶容量有限（約7±2個單位）", "C. 長期記憶提取困難", "D. 程序記憶退化"],
    answer: "B",
    explanation: "工作記憶（短期記憶）的容量有限，大約7±2個記憶單位（Miller's Law）。組塊化將多個小單位合併為有意義的大單位（如電話號碼分段），可有效提升工作記憶的使用效率。"
  },
  {
    id: 15, chapter: 2, type: "MC",
    question: "下列哪一種記憶屬於長期記憶中的「情節記憶（Episodic Memory）」？",
    options: ["A. 記得解二次方程式的步驟", "B. 記得台灣的首都是台北", "C. 記得去年運動會時贏得接力賽的情景", "D. 記得鋼琴演奏時的指法"],
    answer: "C",
    explanation: "情節記憶＝個人親身經歷的事件記憶（有時間、地點、情緒）。A是程序記憶（步驟技能）；B是語意記憶（事實知識）；D是程序記憶（動作技能）。"
  },

  // ===== 第三章 動機理論 =====
  {
    id: 16, chapter: 3, type: "MC",
    question: "馬斯洛（Maslow）需求層次理論中，以下哪些需求屬於「成長需求（Growth Needs）」？",
    options: ["A. 生理、安全、愛與歸屬需求", "B. 尊重、愛與歸屬、安全需求", "C. 認知、審美、自我實現需求", "D. 生理、尊重、自我實現需求"],
    answer: "C",
    explanation: "馬斯洛後期版本7層：最下層3層（生理、安全、愛與歸屬）＋尊重為基本需求（缺乏需求）；認知需求、審美需求、自我實現需求為成長需求（Being Needs）。"
  },
  {
    id: 17, chapter: 3, type: "MC",
    question: "教師在教學中，若要根據 ARCS 動機模式的「R（Relevance，切身相關）」來設計教學活動，下列哪個做法最符合？",
    options: ["A. 播放有趣的動畫影片吸引學生注意", "B. 說明本課程內容與學生生活經驗的連結", "C. 設計難度漸增的任務讓學生逐步成功", "D. 讓學生實際運用所學解決真實問題"],
    answer: "B",
    explanation: "R（Relevance）＝切身相關，策略為：連結學生的過去經驗、現在生活、未來目標，讓學生覺得學習「與我有關」。A是A（Attention）；C是C（Confidence）；D偏向S（Satisfaction）。"
  },
  {
    id: 18, chapter: 3, type: "MC",
    question: "Weiner 歸因理論中，「努力」這個歸因因素的特性為何？",
    options: ["A. 內在、穩定、不可控", "B. 外在、不穩定、不可控", "C. 內在、不穩定、可控", "D. 外在、穩定、不可控"],
    answer: "C",
    explanation: "努力：①內在（在自己身上）②不穩定（這次努力不代表下次也努力）③可控（可以自己決定要不要努力）。正因為「可控」，鼓勵學生歸因努力最能提升動機。"
  },
  {
    id: 19, chapter: 3, type: "MC",
    question: "Bandura 自我效能理論中，「替代經驗」作為效能來源的意思是？",
    options: ["A. 教師直接告訴學生「你一定做得到」", "B. 學生親自完成困難任務後的成就感", "C. 學生觀察與自己相似的人成功完成任務", "D. 學生在比賽中獲得高分"],
    answer: "C",
    explanation: "替代經驗（Vicarious Experience）：觀察與自己程度相似的人（楷模）成功完成任務，從而提升自己「我也應該做得到」的效能感。A是社會說服；B是成功經驗（最強來源）；D也屬於成功經驗。"
  },
  {
    id: 20, chapter: 3, type: "MC",
    question: "下列哪一項教師行為，最能有效預防學生產生「習得無助感（Learned Helplessness）」？",
    options: ["A. 降低所有學生的學習標準，讓每個人都能輕鬆達標", "B. 設計難度適中、有挑戰性但可達成的任務，給予正向回饋", "C. 告訴學生失敗是因為能力不足，需要更努力", "D. 讓表現好的學生示範給其他學生看"],
    answer: "B",
    explanation: "習得無助感源於「反覆失敗後相信努力無用」。預防方式是提供「可成功」的挑戰性任務（Optimal Challenge），讓學生體驗努力後的成功，重建「努力有用」的信念。A是降低標準不是真正解決；C是強化無助感；D可能讓弱勢學生更自卑。"
  },
  {
    id: 21, chapter: 3, type: "MC",
    question: "Zimmerman 自我調整學習的三個階段，正確順序為？",
    options: ["A. 表現→預慮→反思", "B. 預慮→反思→表現", "C. 預慮→表現→反思", "D. 反思→預慮→表現"],
    answer: "C",
    explanation: "自我調整學習三階段：①預慮（Forethought）：設定目標、策略計畫→②表現（Performance）：執行、自我監控→③自我反思（Self-Reflection）：評估結果、調整策略。是一個循環歷程。"
  },
  {
    id: 22, chapter: 3, type: "MC",
    question: "老師在教學時，先以生活化的問題情境導入課程，說明課程內容與學生日常生活的關聯，這最符合 Keller ARCS 模式中哪一個構面的設計？",
    options: ["A. Attention（引起注意）", "B. Relevance（切身相關）", "C. Confidence（建立信心）", "D. Satisfaction（獲得滿足）"],
    answer: "B",
    explanation: "強調「與學生生活的關聯性」＝Relevance（切身相關）。如果題目強調「引起好奇、驚訝」則是Attention；「逐步成功、鼓勵」是Confidence；「實際應用、成就感」是Satisfaction。"
  },
  {
    id: 23, chapter: 3, type: "MC",
    question: "下列有關「學習目標（Mastery Goal）」與「表現目標（Performance Goal）」的比較，何者正確？",
    options: ["A. 持學習目標的學生，失敗後傾向更努力學習", "B. 持表現目標的學生，比持學習目標的學生學習效果更好", "C. 學習目標強調與他人競爭，表現目標強調自我提升", "D. 持表現目標的學生較不容易放棄"],
    answer: "A",
    explanation: "學習目標（又稱精熟目標）以「學會」為核心，即使失敗也視為學習機會，傾向繼續努力。表現目標以「表現好、勝過他人」為核心，失敗容易引發自我形象威脅而放棄。"
  },

  // ===== 第四章 教學設計與差異化教學 =====
  {
    id: 24, chapter: 4, type: "MC",
    question: "ADDIE 教學設計模式的五個階段，正確順序為？",
    options: ["A. 設計→分析→發展→實施→評鑑", "B. 分析→設計→發展→實施→評鑑", "C. 分析→發展→設計→實施→評鑑", "D. 分析→設計→實施→發展→評鑑"],
    answer: "B",
    explanation: "ADDIE：Analysis（分析）→Design（設計）→Development（發展）→Implementation（實施）→Evaluation（評鑑）。記憶口訣：「分設發實評」。"
  },
  {
    id: 25, chapter: 4, type: "MC",
    question: "差異化教學（Differentiated Instruction）的核心本質，最適切的描述為何？",
    options: ["A. 差異化教學是一種具體的教學方法，可以直接套用", "B. 差異化教學是一種教育哲學，旨在回應每位學生的個別需求", "C. 差異化教學主要適用於特殊需求學生的個別化教育計畫", "D. 差異化教學要求教師為每個學生設計完全不同的課程"],
    answer: "B",
    explanation: "差異化教學是一種「哲學/信念」，不是單一方法。它主張在同一班級內，教師主動設計多元學習路徑，以回應學生在準備度、興趣、學習風格上的差異。不只針對特殊學生，也不等於個別化IEP。"
  },
  {
    id: 26, chapter: 4, type: "MC",
    question: "差異化教學的四個調控維度（旋鈕）不包含下列哪一項？",
    options: ["A. 內容（Content）", "B. 過程（Process）", "C. 時間（Time）", "D. 成果（Product）"],
    answer: "C",
    explanation: "差異化教學四大維度：Content（學什麼）/ Process（怎麼學）/ Product（怎麼展現）/ Affect-Environment（情感環境）。「時間」是可調控的旋鈕之一，但不是四大核心維度。"
  },
  {
    id: 27, chapter: 4, type: "MC",
    question: "Tomlinson 的 KUD 差異化目標框架中，「U」代表的是？",
    options: ["A. 學生應能使用（Use）的工具", "B. 學生應能理解（Understand）的大概念", "C. 學生應能達到（Uphold）的標準", "D. 學生應能運用（Utilize）的策略"],
    answer: "B",
    explanation: "KUD框架：K（Know）= 應知道的事實/知識；U（Understand）= 應理解的大概念/原則；D（Do/Be Able To）= 應能做到的技能。U強調「深層理解」而非表面記憶。"
  },
  {
    id: 28, chapter: 4, type: "MC",
    question: "Dick & Carey 系統取向教學設計模式與 ADDIE 模式最大的差異在於？",
    options: ["A. Dick & Carey 不包含評量設計，ADDIE 包含", "B. Dick & Carey 有更詳細的十個步驟，且強調學習者分析", "C. ADDIE 較適合大學課程，Dick & Carey 適合中小學", "D. Dick & Carey 強調教師直覺，ADDIE 強調系統分析"],
    answer: "B",
    explanation: "Dick & Carey 提供詳盡的十步驟（從確認教學目標到設計總結性評鑑），相比ADDIE的五個階段更為細緻，且特別強調「學習者與脈絡分析」（第三步驟）。"
  },
  {
    id: 29, chapter: 4, type: "MC",
    question: "MRK 教學設計模式最突出的特色是？",
    options: ["A. 嚴格的線性步驟，必須按順序完成", "B. 非直線循環，且形成性評鑑貫穿全程", "C. 只適用於高等教育的課程設計", "D. 不需要評鑑，完全依教師經驗進行"],
    answer: "B",
    explanation: "MRK模式最大特色：①非直線循環（無固定起終點）②高度選擇彈性（不需執行所有步驟）③全程持續形成性評鑑④整合管理支持。與ADDIE的線性結構形成對比。"
  },

  // ===== 第五章 教學計畫與素養導向教學 =====
  {
    id: 30, chapter: 5, type: "MC",
    question: "UbD（Understanding by Design）逆向設計的三個階段，正確順序為？",
    options: ["A. 規劃學習活動→確定預期結果→決定評量證據", "B. 確定預期結果→規劃學習活動→決定評量證據", "C. 確定預期結果→決定評量證據→規劃學習活動", "D. 決定評量證據→確定預期結果→規劃學習活動"],
    answer: "C",
    explanation: "UbD逆向設計（McTighe & Wiggins）：Stage 1確定預期學習結果→Stage 2決定評量證據→Stage 3規劃學習經驗與教學活動。「逆向」指先設計評量再設計教學，確保評量與目標高度一致。"
  },
  {
    id: 31, chapter: 5, type: "MC",
    question: "Gagné 教學事件（Nine Events of Instruction）中，第三個事件為何？",
    options: ["A. 引起注意", "B. 告知學習目標", "C. 引起舊學習（刺激先備知識）", "D. 呈現教材"],
    answer: "C",
    explanation: "Gagné九事件：①引起注意→②告知目標→③引起舊學習（回憶先備知識）→④呈現刺激/教材→⑤提供學習輔導→⑥引發表現→⑦提供回饋→⑧評量表現→⑨增進保留與遷移。"
  },
  {
    id: 32, chapter: 5, type: "MC",
    question: "Gagné 的八大學習層次中，最高層次的學習類型是？",
    options: ["A. 概念學習", "B. 原則學習", "C. 解決問題學習", "D. 語文聯想學習"],
    answer: "C",
    explanation: "Gagné八大學習層次由低到高：信號→刺激反應→連鎖→語文聯想→多重識別→概念→原則→解決問題。解決問題學習是最高層次，需要整合多個原則解決新問題。"
  },
  {
    id: 33, chapter: 5, type: "MC",
    question: "素養導向教學的四大原則，下列哪一項「不包含」在內？",
    options: ["A. 整合性", "B. 情境化", "C. 標準化", "D. 實踐性"],
    answer: "C",
    explanation: "素養導向教學四原則：整合性（跨領域整合）、情境化（連結真實生活）、實踐性（做中學）、反思性（自我省察）。「標準化」與素養導向的精神相違背（素養強調多元表現，非統一標準）。"
  },
  {
    id: 34, chapter: 5, type: "MC",
    question: "線性理性教學計畫模式（Lasley & Matczynski, 1997）的四個步驟順序為？",
    options: ["A. Objectives → Goals → Strategies → Assessment", "B. Goals → Strategies → Objectives → Assessment", "C. Goals → Objectives → Strategies → Assessment", "D. Assessment → Goals → Objectives → Strategies"],
    answer: "C",
    explanation: "線性理性模式：Goal（廣泛目的）→ Objectives（具體目標）→ Strategies（教學策略）→ Assessment（評量）。由廣泛到具體，再到教學設計，最後評量。"
  },
  {
    id: 35, chapter: 5, type: "MC",
    question: "下列哪一種教學計畫模式，主要依賴教師「在腦海中形成教學心像」，而非書面詳細規劃？",
    options: ["A. UbD 逆向設計", "B. 心理意象計畫模式（Mental Planning）", "C. ADDIE 模式", "D. 線性理性模式"],
    answer: "B",
    explanation: "心理意象計畫模式（Mental Planning）強調教師將個人知識、信念、經驗過濾後，在腦中形成「教學心像」，不一定需要書面詳細教案。適合有豐富經驗的教師，新手教師不適合直接採用。"
  },

  // ===== 第六章 課程目標與教學目標 =====
  {
    id: 36, chapter: 6, type: "MC",
    question: "Anderson & Krathwohl（2001）修訂 Bloom 認知目標分類後，最高層次改為何者？",
    options: ["A. 評鑑（Evaluate）", "B. 分析（Analyze）", "C. 創作（Create）", "D. 綜合（Synthesis）"],
    answer: "C",
    explanation: "修訂版將舊版「綜合（Synthesis）」改名為「創作（Create）」並移至最高層（第六層）；「評鑑（Evaluate）」降為第五層。順序：記憶→了解→應用→分析→評鑑→創作。"
  },
  {
    id: 37, chapter: 6, type: "MC",
    question: "Bloom 認知目標舊版（1956）與修訂版（2001）的主要差異，下列何者正確？",
    options: ["A. 修訂版增加了「創新」層次", "B. 舊版以動詞命名，修訂版以名詞命名", "C. 修訂版新增知識向度，形成雙向度分類", "D. 舊版最高層是「創作」，修訂版最高層是「評鑑」"],
    answer: "C",
    explanation: "修訂版三大改變：①名詞改動詞（如「知識」→「記憶」）②增加知識向度（事實/概念/程序/後設認知），成為雙向度表格③最高層從「評鑑」改為「創作」（原「綜合」改名）。"
  },
  {
    id: 38, chapter: 6, type: "MC",
    question: "108課綱中，「學習重點」的兩個組成要素為何？",
    options: ["A. 學習目標與學習評量", "B. 學習表現與學習內容", "C. 核心素養與學科知識", "D. 學習動機與學習策略"],
    answer: "B",
    explanation: "108課綱學習重點＝學習表現（學生應展現的認知、技能、情意）＋學習內容（學科的概念、事實、技能）。學習表現對應教學目標，學習內容對應教材內容。"
  },
  {
    id: 39, chapter: 6, type: "MC",
    question: "Gagné 五大學習結果中，「認知策略（Cognitive Strategies）」是指？",
    options: ["A. 學生能陳述的事實知識", "B. 學生調控自身學習歷程的內在能力", "C. 學生影響選擇的情意傾向", "D. 學生能執行的動作技能"],
    answer: "B",
    explanation: "認知策略（Cognitive Strategies）是學生調控自身認知歷程的能力，如記憶策略、問題解決策略、自我監控等，相當於後設認知技能。非語文資訊（事實知識）也非態度（情意）。"
  },
  {
    id: 40, chapter: 6, type: "MC",
    question: "Simpson 動作技能目標分類中，「機械化（Mechanism）」層次的意思是？",
    options: ["A. 感受到動作訊號的存在", "B. 在教師指導下模仿動作", "C. 動作熟練到成為自動化習慣", "D. 創造出全新的動作"],
    answer: "C",
    explanation: "Simpson動作技能七層：知覺→趨向→引導反應（模仿）→機械化（習慣）→複雜外在反應→適應→創新。機械化指動作已熟練到不需刻意思考，如「打鍵盤已成為習慣」。"
  },
  {
    id: 41, chapter: 6, type: "MC",
    question: "Krathwohl 情意目標分類中，最高層次「形成品格（Characterization by Value）」的意思是？",
    options: ["A. 學生願意注意並知曉某種價值觀", "B. 學生主動回應並參與相關活動", "C. 學生整合多種價值觀形成一致的人生觀並付諸行動", "D. 學生能評估某種價值觀的重要性"],
    answer: "C",
    explanation: "情意五層：接受（知曉）→反應（參與）→評價（認同重要性）→組織（整合多種價值）→形成品格（價值觀內化為行為準則，言行一致）。最高層是「品格已形成，成為穩定的人格特質」。"
  },
  {
    id: 42, chapter: 6, type: "MC",
    question: "108課綱核心素養「三面九項」中，「B2科技資訊與媒體素養」屬於哪一個面向？",
    options: ["A. A 自主行動", "B. B 溝通互動", "C. C 社會參與", "D. 不屬於三面九項"],
    answer: "B",
    explanation: "三面：A自主行動（A1/A2/A3）、B溝通互動（B1符號運用/B2科技資訊/B3藝術涵養）、C社會參與（C1道德實踐/C2人際關係/C3多元文化）。B2屬於B溝通互動面向。"
  },

  // ===== 第七章 行為目標與教學評量 =====
  {
    id: 43, chapter: 7, type: "MC",
    question: "Mager 提出的行為目標 ABCD 四要素中，「C」代表的是？",
    options: ["A. 學習者（Client）", "B. 評量標準（Criteria）", "C. 執行行為的條件（Conditions）", "D. 課程內容（Content）"],
    answer: "C",
    explanation: "ABCD四要素：A（Audience，對象/學習者）、B（Behavior，可觀察的行為）、C（Conditions，執行行為的條件/情境）、D（Degree，表現標準/程度）。"
  },
  {
    id: 44, chapter: 7, type: "MC",
    question: "下列哪一個是符合行為目標撰寫原則的目標？",
    options: ["A. 學生能了解台灣的民主發展", "B. 學生能認識三角形的特性", "C. 學生能在不查閱課本的情況下，說出等腰三角形的兩個特性", "D. 教師能培養學生對數學的興趣"],
    answer: "C",
    explanation: "行為目標四原則：①具體可衡量（「說出」是可觀察行為）②以學生為中心（非教師行為）③單一成果④考量ABCD（條件：不查課本；行為：說出；標準：兩個特性）。A/B「了解、認識」是模糊動詞；D是以教師為主體。"
  },
  {
    id: 45, chapter: 7, type: "MC",
    question: "Eisner 的「表意目標（Expressive Objectives）」與「行為目標」最大的差異在於？",
    options: ["A. 表意目標有更嚴格的評量標準", "B. 表意目標強調學習過程與個別化體驗，而非預定的行為結果", "C. 表意目標只適用於行為學科", "D. 行為目標比表意目標更適合藝術教育"],
    answer: "B",
    explanation: "表意目標（Eisner提出）強調學習活動的過程與個人體驗，結果是開放的、多元的；行為目標強調預定的、可測量的具體行為結果。表意目標特別適用於藝術、創意、探索性學習，允許個別差異。"
  },
  {
    id: 46, chapter: 7, type: "MC",
    question: "教學評量中，「形成性評量（Formative Assessment）」的主要目的為何？",
    options: ["A. 評定學生的學期總成績", "B. 決定學生的分班依據", "C. 在教學過程中診斷學習狀況，即時回饋並調整教學", "D. 評估學生的先備知識以決定教學起點"],
    answer: "C",
    explanation: "四大評量：安置性（教學前，決定起點行為）、診斷性（教學中，找出學習困難原因）、形成性（教學中，即時回饋調整教學）、總結性（教學後，評定學習成就）。形成性評量強調「及時回饋、調整教學」，不用來計算成績（那是總結性評量的功能）。"
  },
  {
    id: 47, chapter: 7, type: "MC",
    question: "「安置性評量（Placement Assessment）」通常在什麼時間點進行？",
    options: ["A. 每節課結束後", "B. 學期末", "C. 教學活動開始之前", "D. 學生提交作業後"],
    answer: "C",
    explanation: "安置性評量在教學前進行，目的是了解學生的起點行為（先備知識、能力水準），以決定教學的起始點、分組方式或是否需要預備教學。"
  },
  {
    id: 48, chapter: 7, type: "MC",
    question: "下列何者屬於行為目標撰寫中「模糊、不宜使用」的動詞？",
    options: ["A. 說出", "B. 計算", "C. 了解", "D. 區分"],
    answer: "C",
    explanation: "「了解」無法直接觀察與評量，屬於模糊動詞。應改為具體動詞：「說出、解釋、舉例說明」等。說出（可觀察）、計算（可觀察）、區分（可觀察）都是可接受的行為動詞。"
  },
  {
    id: 49, chapter: 7, type: "MC",
    question: "Gagné 行為目標五要素中，「習得能力類型（Capability）」指的是？",
    options: ["A. 學生的學習風格", "B. 對應 Gagné 五大學習結果的分類", "C. 學生的先備知識水準", "D. 評量的難易度"],
    answer: "B",
    explanation: "Gagné五要素目標中，「習得能力類型」是指該目標對應到 Gagné 五大學習結果（語文資訊/心智技能/認知策略/動作技能/態度）的哪一類，用以確保教學設計符合學習類型。"
  },
  {
    id: 50, chapter: 7, type: "MC",
    question: "下列有關教學評量四大類型的比較，何者「錯誤」？",
    options: ["A. 安置性評量在教學前進行，了解學生起點行為", "B. 形成性評量在教學中進行，提供即時回饋", "C. 總結性評量在教學後進行，評定學習成就", "D. 形成性評量主要用於計算學期成績"],
    answer: "D",
    explanation: "形成性評量的目的是「診斷與調整教學」，強調過程回饋，通常「不計入學期成績」（或只佔少部分）。計算學期成績是總結性評量的功能。四大評量：安置性（教學前）、診斷性（教學中找困難）、形成性（教學中即時回饋）、總結性（教學後）。"
  },

  // ===== 跨章節進階題 =====
  {
    id: 51, chapter: 5, type: "MC",
    question: "下列哪一項教學設計，最能體現 UbD「逆向設計」的精神？",
    options: ["A. 先教完所有內容，最後才設計測驗", "B. 先決定要考什麼，再設計教什麼、怎麼教", "C. 先讓學生自由探索，最後討論學到了什麼", "D. 先設計活動，活動結束後評估是否達到目標"],
    answer: "B",
    explanation: "UbD逆向設計的核心：先確定學習目標→先設計評量（Stage 2）→最後設計教學活動（Stage 3）。「先決定要考什麼」= 先設計評量證據，再決定如何幫學生達到那個標準。"
  },
  {
    id: 52, chapter: 2, type: "MC",
    question: "「後設認知（Metacognition）」在學習上的主要功能為何？",
    options: ["A. 增加工作記憶的容量", "B. 讓學生能監控和調整自己的學習歷程", "C. 提升長期記憶的提取速度", "D. 培養學生的語文智能"],
    answer: "B",
    explanation: "後設認知是「對自己認知歷程的認識與調控」，包含：①後設認知知識（知道自己的強弱項）②後設認知監控（監控學習進度並調整策略）。是自我調整學習的核心能力。"
  },
  {
    id: 53, chapter: 3, type: "MC",
    question: "教師設計「逃脫密室」情境的學習活動，讓學生在解題過程中體驗成功，這主要符合 ARCS 中哪些構面？",
    options: ["A. 只有 Attention（引起注意）", "B. Attention 和 Confidence（注意與信心）", "C. Relevance 和 Satisfaction（相關與滿足）", "D. Attention、Confidence 和 Satisfaction（注意、信心、滿足）"],
    answer: "D",
    explanation: "逃脫密室：①新奇有趣的情境→Attention（引起注意）②設計讓學生能解開謎題→Confidence（逐步成功建立信心）③解題成功的成就感→Satisfaction（獲得滿足）。三者均有體現。"
  },
  {
    id: 54, chapter: 6, type: "MC",
    question: "108課綱核心素養編碼「J-C2-1」中，「J」代表的是？",
    options: ["A. 國小（Junior Elementary）", "B. 國中（Junior High School）", "C. 高中（Junior Secondary）", "D. 大學（Junior University）"],
    answer: "B",
    explanation: "核心素養學習階段編碼：E＝國小（Elementary）、J＝國中（Junior High）、U＝高中（Upper Secondary）。J-C2-1即為「國中階段，社會參與面向，人際關係與團隊合作，第1條」。"
  },
  {
    id: 55, chapter: 4, type: "MC",
    question: "一位教師設計課程時，允許學生用「寫報告、做模型或拍短片」來展示學習成果，這屬於差異化教學四維度中的哪一個？",
    options: ["A. 內容（Content）差異化", "B. 過程（Process）差異化", "C. 成果（Product）差異化", "D. 環境（Affect/Environment）差異化"],
    answer: "C",
    explanation: "允許學生以不同「格式」展示學習成果（報告/模型/短片）= Product（成果）差異化。Content是學什麼；Process是學習活動的方式；Affect-Environment是學習氛圍。"
  },

  // ===== 補充題：Ch7 考試高頻考點 =====
  {
    id: 56, chapter: 7, type: "MC",
    question: "下列四種評量類型中，「診斷性評量（Diagnostic Assessment）」的主要目的為何？",
    options: ["A. 安排學生分班或分組", "B. 找出學生持續性學習困難的原因，提供補救教學依據", "C. 評定學生的期末總成績", "D. 引起學生的學習動機"],
    answer: "B",
    explanation: "診斷性評量在教學「過程中」進行，目的是找出學生學習困難的根本原因（非一般缺失），以便安排補救教學。與安置性（決定起點）、形成性（即時回饋）、總結性（評定成就）不同，診斷性專注於「找病因」。"
  },
  {
    id: 57, chapter: 7, type: "MC",
    question: "「PR值（Percentile Rank）」用來解釋常模參照評量結果，下列敘述何者正確？",
    options: ["A. PR值範圍是0到100，PR100表示全班最高分", "B. PR值範圍是1到99，PR75表示贏過75%的同儕", "C. PR值是標準參照評量的主要報告方式", "D. PR值愈低表示學生答對的題數愈多"],
    answer: "B",
    explanation: "PR值（百分等級）是常模參照評量的報告指標：①範圍1–99（不含0和100）②PR75表示在參照團體中贏過75%的人③與標準參照不同，標準參照以固定標準（如60分及格）判定，不依據他人表現。"
  },
  {
    id: 58, chapter: 7, type: "MC",
    question: "教師編製試卷時使用「雙向細目表（Two-Way Specification Table）」，主要目的是？",
    options: ["A. 確保試題難易度符合常態分配", "B. 確保試題兼顧不同知識向度與認知層次，建立內容效度", "C. 計算每道題目的鑑別度與難度", "D. 決定各章節的出題比例上限"],
    answer: "B",
    explanation: "雙向細目表的兩個軸：縱軸＝學習內容向度（事實/概念/程序/後設認知知識），橫軸＝認知歷程向度（記憶/了解/應用/分析/評鑑/創作）。用途是確保命題能均衡涵蓋各向度，是建立試卷「內容效度（Content Validity）」的重要工具。"
  },
  {
    id: 59, chapter: 6, type: "MC",
    question: "Bloom 修訂版知識向度中，「後設認知知識（Metacognitive Knowledge）」是指？",
    options: ["A. 對學科事實與術語的記憶", "B. 理解概念之間的分類與原則", "C. 對自身認知歷程的認識，包含知道何時使用哪種策略", "D. 能執行特定程序或步驟的知識"],
    answer: "C",
    explanation: "四種知識向度：①事實知識（術語、細節）②概念知識（分類、原則、理論）③程序知識（步驟、技巧、方法）④後設認知知識（對自身認知的認識，如知道自己擅長視覺學習、知道何時需要換策略）。後設認知知識是新版修訂後新增的。"
  },
  {
    id: 60, chapter: 7, type: "MC",
    question: "下列哪一項屬於「標準參照評量（Criterion-Referenced Assessment）」的特色？",
    options: ["A. 以班級平均表現為比較基準", "B. 分數高低取決於同儕排名", "C. 以預先設定的固定標準判斷是否達標", "D. 通常用PR值來報告結果"],
    answer: "C",
    explanation: "標準參照評量：以預先設定的固定標準（如60分及格、游泳50公尺）判定是否達到學習目標，與他人表現無關。教師自編單元測驗多屬此類。相對地，常模參照評量依據同儕排名（PR值），如基測、學測。"
  },
  {
    id: 61, chapter: 6, type: "MC",
    question: "老師說：「有情緒智能（EQ）的人能感知並管理自己的情緒，智識智能（IQ）高不一定代表未來成功。」這與哪位學者的主張最相關？",
    options: ["A. Bloom", "B. Goleman（高曼）", "C. Gagné", "D. Tyler"],
    answer: "B",
    explanation: "情緒智能（EQ）由Salovey & Mayer提出，Goleman（高曼）發揚光大，強調自我覺察、自我管理、同理心、社交技巧。相關概念：AQ（逆境智能）、SQ（社會智能）。教師應培養學生的EQ/SQ/AQ，而非僅重視IQ。"
  }
];

// 依章節分組
const CHAPTER_INFO = {
  1: { name: "第一章 緒論", color: "#FF6B6B" },
  2: { name: "第二章 學習理論與教學", color: "#4ECDC4" },
  3: { name: "第三章 動機理論與教學", color: "#45B7D1" },
  4: { name: "第四章 教學設計與差異化教學", color: "#96CEB4" },
  5: { name: "第五章 教學計畫與素養導向教學", color: "#9B8EC4" },
  6: { name: "第六章 課程目標與教學目標", color: "#DDA0DD" },
  7: { name: "第七章 行為目標與教學評量", color: "#F0A500" }
};
