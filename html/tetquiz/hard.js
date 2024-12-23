const quiz = [
    { 
        question: 'Q1 連パフェなどの理論で用いられる、地形やテトリミノを市松模様状に2色に塗り分ける考え方を何と呼ぶ？', 
        choices: ['グリッド', 'パリティ', 'チェッカー', 'ドネイト'], 
        correct: 'パリティ' 
    },
    { 
        question: 'Q2 40ラインなどで、最適化や速度の出しやすい積み方の名前は？', 
        choices: ['18積み', '36積み', '63積み', '81積み'], 
        correct: '63積み' 
    },
    { 
        question: 'Q3 初期版GBテトリスのTYPE-Aの音楽は？', 
        choices: ['コロブチカ', '金平糖の精の踊り', 'カチューシャ', 'メヌエット'], 
        correct: 'メヌエット' 
    },
    { 
        question: 'Q4 現代テトリスのガイドラインを制定したのは？', 
        choices: ['三原一郎', 'アレクセイ・パジトノフ', 'ヘンク・B・ロジャース', 'タロン・エガートン'], 
        correct: 'ヘンク・B・ロジャース' 
    },
    { 
        question: 'Q5 ドネイトの一種で、下穴にLまたはJを塞ぐように立てて置き、反対側に屋根をつけてTSSまたはTSDを組む中盤テンプレの名前は？', 
        choices: ['欄干', '千鳥格子', 'ダブルダガー', '階段ドネイト'], 
        correct: '欄干' 
    },
    { 
        question: 'Q6 現在のテトリスエフェクトにおいて、ZONEで23ライン揃えたときの表記は？', 
        choices: ['KIRBTRIS', 'IMPOSSIBILITRIS', 'INSANITRIS', 'INFINITRIS'], 
        correct: 'INFINITRIS' 
    },
    { 
        question: 'Q7 七種一巡のないテトリスで、Iミノが不足してしまう現象のことを何と言う？', 
        choices: ['愛情不足', 'ネグレクト', 'ドラウト', 'フラッド'], 
        correct: 'ドラウト' 
    },
    { 
        question: 'Q8 T-Spin MiniがTSSと同様の火力が出るゲームは？', 
        choices: ['ぷよぷよテトリス', 'テトリスDS', 'テトリスエフェクト', 'スーパーテトリス3'], 
        correct: 'テトリスDS' 
    },
    { 
        question: 'Q9 一般的な対戦テトリスにおいて、テトリミノが床に着いてから固定されるまでの時間は約何秒？', 
        choices: ['0.13', '0.25', '0.28', '0.5'], 
        correct: '0.5' 
    },
    { 
        question: 'Q10 テトリミノが一瞬で床につく、落下速度が最大の状態を何と言う？', 
        choices: ['1G', '20G', 'トランジション', 'グラビティ'], 
        correct: '20G' 
    },
    { 
        question: 'Q11 開幕TSDは日本と海外で名前が異なるが、海外では何と呼ばれている？', 
        choices: ['TKI', 'C-Spin', 'TSD Opener', 'PCO'], 
        correct: 'TKI' 
    },
    { 
        question: 'Q12 次のタイトルの内、サービス終了していないのはどれ？', 
        choices: ['Tetris Friends', 'テトリスオンライン', 'ぷよぷよテトリスS', 'テトリスモンスター'], 
        correct: 'ぷよぷよテトリスS' 
    },
    { 
        question: 'Q13 エレクトロニカ60のテトリスでは、テトリミノはテキストでどのように表現されている？', 
        choices: ['「」', '<>', '・', '[ ]'], 
        correct: '[ ]' 
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
    resultMessage.textContent = "分からなくても仕方ないです...";
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
