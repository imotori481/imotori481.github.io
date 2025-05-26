const quiz = [
    { 
        question: 'Q1 TouhouMinoの作者は誰？', 
        choices: ['osk', 'Dimentio', '三原一郎'], 
        correct: '' 
    },
    { 
        question: 'Q2 2面3枚目のスペカの効果は？', 
        choices: ['HideHold & 4列中開け', 'NoHold & 4列中開け', 'NoNext & 4列中開け'], 
        correct: 'NoHold & 4列中開け' 
    },
    { 
        question: 'Q3 3面1枚目のスペカでは、何列目に単体でミノが出現する？', 
        choices: ['2列目', '6列目', '9列目'], 
        correct: '2列目' 
    },
    { 
        question: 'Q4 4面2枚目のスペカでは、固定猶予は何Fになる？', 
        choices: ['1', '8', '15'], 
        correct: '1' 
    },
    { 
        question: 'Q5 TouhouMino_GMの回転法則は？', 
        choices: ['SRS-X', 'DRS', 'Classic3'], 
        correct: 'Classic3' 
    },
    { 
        question: 'Q6 6面3枚目のスペカでは、何が消滅する？', 
        choices: ['操作中のミノ', '設置したミノ', 'ネクスト'], 
        correct: '操作中のミノ' 
    },
    { 
        question: 'Q7 7面では何が起こる？', 
        choices: ['IミノがOミノに変化する', 'Oミノがハードブロックに変化する', '実は何も起こってない'], 
        correct: 'IミノがOミノに変化する' 
    },
    { 
        question: 'Q8 TouhouMinoは何のゲームのMod？', 
        choices: ['Minecraft', 'NullpoMino', 'Heboris'], 
        correct: 'NullpoMino' 
    },
    { 
        question: 'Q9 9面2枚目のスペカでは何が起こる？', 
        choices: ['ハードブロックが出現する', 'ミノの色がランダムになる', '虹色のミノがランダムにせり上がる'], 
        correct: 'ハードブロックが出現する' 
    },
    { 
        question: 'Q10 10面1枚目のスペカでは、何が起こる？', 
        choices: ['上4段が消去される', '上5段が消去される', '上6段が消去される'], 
        correct: '上5段が消去される' 
    },
    { 
        question: 'Q11 11面1枚目のスペカでは、虹色のせり上がり出現するが、最大何列せり上がる？', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q12 12面3枚目のスペカでは、何が起こる？', 
        choices: ['消えロール', 'X-RAY', '操作左右反転'], 
        correct: '' 
    },
    { 
        question: 'Q13 13面3枚目のスペカでは、終了時に何が起こる？', 
        choices: ['Tスピントリプルの地形出現', 'ダークガベージ消滅', '何も起こらない'], 
        correct: '' 
    },
    { 
        question: 'Q14 TouhouMinoで使用されているアレンジ楽曲は何曲使用されている？', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q15 15面1枚目のスペカでは、何に最も気をつける必要がある？', 
        choices: ['2段以上のライン消去', 'テトリス回数', '権利侵害'], 
        correct: '' 
    },
    { 
        question: 'Q16 16面1枚目のスペカでは、縛りなしの場合何が起こる？', 
        choices: ['Jミノのみ出現する', 'ホールド使用不可', 'Lミノのみ出現する'], 
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
        question: 'Q29 ', 
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
