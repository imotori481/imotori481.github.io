const quiz = [
    { 
        question: 'Q1 現代テトリスでの、柔軟な回転を行うシステムの名前は？', 
        choices: ['SRS', 'T-Spin', 'All-Spin', 'ARS'], 
        correct: 'SRS' 
    },
    { 
        question: 'Q2 ゲーム開始時に、テトリミノをあらかじめ決まった場所に置いて火力を出すことを何と言う？', 
        choices: ['火力待ち', 'ストライド', 'メタ', '開幕テンプレ'], 
        correct: '開幕テンプレ' 
    },
    { 
        question: 'Q3 7種類のテトリミノを1個ずつランダムに並び変えて出現させる、この法則の名前は？', 
        choices: ['七種一巡', 'メモリー7', '確率補正', '一種七巡'], 
        correct: '七種一巡' 
    },
    { 
        question: 'Q4 公式のルールにおいて、Back to Backによる追加火力はいくつ？', 
        choices: ['0', '1', '2', '3'], 
        correct: '1' 
    },
    { 
        question: 'Q5 TST → TSDを連続で撃てる形の名前は？', 
        choices: ['インペリアルクロス', 'STSD', 'DT砲', 'TDアタック'], 
        correct: 'TDアタック' 
    },
    { 
        question: 'Q6 テトリスは西暦何年に誕生した？', 
        choices: ['2年', '1300年', '1984年', '1998年'], 
        correct: '1984年' 
    },
    { 
        question: 'Q7 ロシア民謡でない曲はどれ？', 
        choices: ['コロブチカ', 'トロイカ', 'カリンカ', 'テクノトリス'], 
        correct: 'テクノトリス' 
    },
    { 
        question: 'Q8 テトリスエフェクトにおいて、ZONEで20ライン揃えたときの表記は？', 
        choices: ['PERFECTRIS', 'ULTIMATRIS', 'ABSOLUTRIS', 'INSTINCTRIS'], 
        correct: 'ULTIMATRIS' 
    },
    { 
        question: 'Q9 テトリス99において、時間経過で火力が上昇するシステムの名前は？', 
        choices: ['マージン', 'パディング', 'アライン', 'ウェイト'], 
        correct: 'マージン' 
    },
    { 
        question: 'Q10 一秒あたりのテトリミノ設置速度のことを何と呼ぶ？', 
        choices: ['LST', 'APM', 'PPS', 'FTB'], 
        correct: 'PPS' 
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
    resultMessage.textContent = "上達のためにも知識を付けていこう";
    if (score >= quizLength * 0.8) {
        result = "合格";
        resultMessage.textContent = "基本は押さえられています！今後も多くの知識を身に着けましょう！";
    }

    resultParagraph.textContent = `NORMALモード ${result}`;
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
