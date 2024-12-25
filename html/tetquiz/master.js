const quiz = [
    { 
        question: 'Q1 TGMにおける「ARE」に最も近い意味を答えよ', 
        choices: ['優勝', '陰謀', '出現遅延', 'Absolute Rounds Eye'], 
        correct: '出現遅延' 
    },
    { 
        question: 'Q2 Tミノが5列目の2マス以上の穴に入ってしまうことを何という？', 
        choices: ['大ハマリ', '水色の悪魔', '死の蓋', 'ふんどしバスター'], 
        correct: 'ふんどしバスター' 
    },
    { 
        question: 'Q3 Tiに存在しないメダルはどれ？', 
        choices: ['CO', 'RO', 'SK', 'AC'], 
        correct: 'RO' 
    },
    { 
        question: 'Q4 TA以降で、右溜め→上→左→下のようにレバーを270度回転させる技の名前は？', 
        choices: ['ガイル入れ', 'ザンギ入れ', 'リュウ入れ', 'ダルシム入れ'], 
        correct: 'ザンギ入れ' 
    },
    { 
        question: 'Q5 画像のような形を組むことで得られる称号は？', 
        choices: ['Secret Grade GM', 'Tetris Artist', 'S13', 'Death GM'], 
        correct: 'Secret Grade GM' 
    },
    { 
        question: 'Q6 Tiで、存在しない盤面の枠の色は？', 
        choices: ['緑色', '桜色', '金色', '紫色'], 
        correct: '紫色' 
    },
    { 
        question: 'Q7 SAKURAモード10面の地形はどれ？', 
        choices: ['1', '2', '3', '4'], 
        correct: '1' 
    },
    { 
        question: 'Q8 初代TGMにおいて、GM条件として間違っているものは？', 
        choices: ['Lv300までにグレード1', 'カンスト時に13分30秒以下', 'Lv500までにグレードS4', 'カンスト時に126000点以上'], 
        correct: 'カンスト時に13分30秒以下' 
    },
    { 
        question: 'Q9 TAPにおいて、消えロール出現条件として間違っているもの は？', 
        choices: ['カンスト時にS9', 'カンスト時に8分45秒以下', 'Lv0～500で、セクションタイムが1分5秒以下', 'Lv500～999で、セクションタイムが前セクション+2秒以下'], 
        correct: 'Lv500～999で、セクションタイムが前セクション+2秒以下' 
    },
    { 
        question: 'Q10 Tiにおいて、セクションCOOLの条件は前セクションタイムの±何秒？', 
        choices: ['1', '2', '3', '4'], 
        correct: '2' 
    },
    { 
        question: 'Q11 画像のような回転入れを何と呼ぶ？', 
        choices: ['変態入れ', '与作', '伏せ', 'でんぐり返し'], 
        correct: '変態入れ' 
    },
    { 
        question: 'Q12 SHIRASE Lv500～999で、地形がせり上がることは何と表現されることが多い？', 
        choices: ['コピーガベージ', 'おのれアリカ', 'あがるのかよぉ～', '訃'], 
        correct: 'あがるのかよぉ～' 
    },
    { 
        question: 'Q13 クラシックテトリスでの、柔軟な回転を行うシステムの非公式な名前は？', 
        choices: ['SRS', 'T-Spin', 'All-Spin', 'ARS'], 
        correct: 'ARS' 
    },
    { 
        question: 'Q14 初代TGMは西暦何年に誕生した？', 
        choices: ['1989', '1998', '2000', '2005'], 
        correct: '1998' 
    },
    { 
        question: 'Q15 陰謀の首謀者は誰？', 
        choices: ['中臣鎌足', '後醍醐天皇', '明智光秀', '三原一郎'], 
        correct: '三原一郎' 
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const buttons = document.querySelectorAll('#choice button');
const questionElement = document.getElementById('question');
const choiceContainer = document.getElementById('choice');

const DrawImages = (q) => {
    const images = [
        "quiz_images/blank.png",
        "quiz_images/master_q5.png",
        "quiz_images/master_q7.png",
        "quiz_images/master_q11.png",
        "quiz_images/master_q15.png"
    ];

    let selectedImage;
    if (q === 4) {
        selectedImage = images[1];
    } else if (q === 6) {
        selectedImage = images[2];
    } else if (q === 10) {
        selectedImage = images[3]
    } else if (q === 14) {
        selectedImage = images[4]
    } else {
        selectedImage = images[0];
    }

    const imageElement = document.getElementById("display-image");
    imageElement.src = selectedImage;
    imageElement.alt = `${selectedImage}`;
};

const SetupQuiz = () => {
    questionElement.textContent = quiz[quizIndex].question;
    buttons.forEach((button, index) => {
        button.textContent = quiz[quizIndex].choices[index];
    });
    DrawImages(quizIndex);
};

const DisplayScore = () => {
    // 問題とボタンを非表示にする
    questionElement.classList.add('hidden');
    choiceContainer.classList.add('hidden');

    // 結果を表示
    const container = document.getElementById('container');
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = `あなたのスコアは ${score} / ${quizLength} です。`;
    resultParagraph.classList.add("main");
    container.appendChild(resultParagraph);
};

const Result = () => {
    const resultParagraph = document.createElement('p');
    let resultMessage = document.createElement('p');
    let result = "不合格";
    resultMessage.textContent = "EXCELLENT, but... let's go better next time.";
    if (score >= quizLength * 0.8) {
        result = "合格";
        resultMessage.textContent = "YOU ARE THE GRAND TETRIS QUIZ MASTER!";
    }

    resultParagraph.textContent = `MASTERモード ${result}`;
    resultParagraph.classList.add('main');
    resultMessage.classList.add('main');
    container.appendChild(resultParagraph);
    container.appendChild(resultMessage);
};

SetupQuiz();

const ClickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        alert('正解！');
        score++;
    } else {
        alert('不正解！');
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        SetupQuiz();
    } else {
        DisplayScore();
        Result();
    }
};

// ボタンにイベントを追加
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        ClickHandler(e);
    });
});
