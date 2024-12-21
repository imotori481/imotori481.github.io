const quiz = [
    { 
        question: 'Q1 連パフェなどの理論で用いられる、地形やテトリミノを市松模様状に2色に塗り分ける考え方を何と呼ぶ？', 
        choices: ['グリッド', 'パリティ', 'チェッカー', ''], 
        correct: '' 
    },
    { 
        question: 'Q2', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q3', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q4', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q5', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q6', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q7', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q8', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q9', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q10', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q11', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q12', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q13', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q14', 
        choices: ['', '', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q15', 
        choices: ['', '', '', ''], 
        correct: '' 
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
    resultMessage.textContent = "分からなくても仕方ないです";
    if (score >= quizLength * 0.8) {
        result = "合格";
        resultMessage.textContent = "流石です！テトリス知識で一般人に負けることはまずないでしょう";
    }

    resultParagraph.textContent = `HARDモード ${result}`;
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
