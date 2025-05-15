const quiz = [
    { 
        question: 'Q1 制作中です、TGM4のようにしばらくお待ちください', 
        choices: ['はい', 'しょうがねえなあ', '思いっきり作りかけでもいいからやりたい！'], 
        correct: '思いっきり作りかけでもいいからやりたい！' 
    },
    { 
        question: 'Q2 2面3枚目のスペカの効果は？', 
        choices: ['HideHold & 4列中開け', 'NoHold & 4列中開け', 'NoNext & 4列中開け'], 
        correct: 'NoHold & 4列中開け' 
    },
    { 
        question: 'Q3 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q4 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q5 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q6 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q7 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q8 ', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q9', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q10', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q11', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q12', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q13', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q14', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q15', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q16', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q17', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q18', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q19', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q20', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q21', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q22', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q23', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q24', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q25', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q26', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q27', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q28', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q29', 
        choices: ['', '', ''], 
        correct: '' 
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const buttons = document.querySelectorAll('#choice button');
const questionElement = document.getElementById('question');
const choiceContainer = document.getElementById('choice');
const imageElement = document.getElementById("display-image");

const SetupQuiz = () => {
    questionElement.textContent = quiz[quizIndex].question;
    buttons.forEach((button, index) => {
        button.textContent = quiz[quizIndex].choices[index];
    });
};

const DisplayScore = () => {
    questionElement.classList.add('hidden');
    choiceContainer.classList.add('hidden');
    imageElement.classList.add('hidden');

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
    resultMessage.textContent = "30分前に出直しな！";
    if (score >= quizLength * 0.8) {
        result = "合格";
        resultMessage.textContent = "";
    }

    resultParagraph.textContent = `LUNATICモード ${result}`;
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
