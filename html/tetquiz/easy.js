const quiz = [
    { 
        question: 'Q1 十字キーの上を押したときに、一瞬でテトリミノを落下させ固定する操作の名前は？', 
        choices: ['ソフトドロップ', 'ハードドロップ', 'ソニックドロップ', 'フリーフォール'], 
        correct: 'ハードドロップ' 
    },
    { 
        question: 'Q2 テトリミノは何種類ある？', 
        choices: ['5', '6', '7', '8'], 
        correct: '7' 
    },
    { 
        question: 'Q3 4ライン消去することを公式に何と呼ぶ？', 
        choices: ['テックラッシュ', 'クアッド', 'SK', 'テトリス'], 
        correct: 'テトリス' 
    },
    { 
        question: 'Q4 テトリスはどの国で誕生した？', 
        choices: ['アメリカ合衆国', '日本', 'ソビエト社会主義共和国連邦', 'ロシア帝国'], 
        correct: 'ソビエト社会主義共和国連邦' 
    },
    { 
        question: 'Q5 テトリス99において、1位になることを日本語で何と呼ぶ？', 
        choices: ['テト1', 'ドン勝', 'ビクロイ', 'チャンピオン'], 
        correct: 'テト1'
    },
    { 
        question: 'Q6 対戦テトリスにおいて、トリプルの火力はいくつ？', 
        choices: ['1', '2', '3', '4'], 
        correct: '2'
    },
    { 
        question: 'Q7 盤面上のミノを全て消すことを公式に何と呼ぶ？', 
        choices: ['All Clear', 'BRAVO', 'Perfect Clear', 'Quarrying'], 
        correct: 'Perfect Clear'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const buttons = document.querySelectorAll('#choice button');
const questionElement = document.getElementById('question');
const choiceContainer = document.getElementById('choice');

const SetupQuiz = () => {
    questionElement.textContent = quiz[quizIndex].question;
    buttons.forEach((button, index) => {
        button.textContent = quiz[quizIndex].choices[index];
    });
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
    resultMessage.textContent = "少しずつ、楽しく覚えていきましょう";
    if (score >= quizLength * 0.8) {
        result = "合格";
        resultMessage.textContent = "今後も上を目指してステップアップしていこう！";
    }

    resultParagraph.textContent = `EASYモード ${result}`;
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
