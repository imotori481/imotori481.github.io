const quiz = [
    { 
        question: 'Q1 TouhouMinoの作者は誰？', 
        choices: ['osk', 'Dimentio', '三原一郎'], 
        correct: 'Dimentio' 
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
        choices: ['0', '8', '15'], 
        correct: '0' 
    },
    { 
        question: 'Q5 TouhouMino_GMの回転法則の通称は？', 
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
        question: 'Q11 11面1枚目のスペカでは、何が起こる？', 
        choices: ['消すと再度せり上がるガベージ出現', '一人で背水の陣を組む', '何も起こらない'], 
        correct: '消すと再度せり上がるガベージ出現' 
    },
    { 
        question: 'Q12 12面3枚目のスペカでは、何が起こる？', 
        choices: ['消えロール', 'X-RAY', '操作左右反転'], 
        correct: '消えロール' 
    },
    { 
        question: 'Q13 13面3枚目のスペカでは、終了時に何が起こる？', 
        choices: ['Tスピントリプルの地形出現', 'ダークガベージ消滅', '何も起こらない'], 
        correct: 'ダークガベージ消滅' 
    },
    { 
        question: 'Q14 TouhouMinoで現在使用されているアレンジ楽曲は何曲ある？', 
        choices: ['4', '5', '6'], 
        correct: '5' 
    },
    { 
        question: 'Q15 15面1枚目のスペカでは、何に最も気をつける必要がある？', 
        choices: ['2段以上のライン消去', 'テトリス回数', 'テトカンの目'], 
        correct: '2段以上のライン消去' 
    },
    { 
        question: 'Q16 16面3枚目のスペカでは、縛りなしの場合何が起こる？', 
        choices: ['Jミノのみ出現する', 'ホールド使用不可', 'Lミノのみ出現する'], 
        correct: 'Lミノのみ出現する' 
    },
    { 
        question: 'Q17 17面1枚目のスペカでは、何が起こる？', 
        choices: ['時が動き出す', '時が動き出す', '時が動き出す'], 
        correct: '時が動き出す' 
    },
    { 
        question: 'Q18 18面3枚目のスペカでは、縛りなしの場合何が起こる？', 
        choices: ['4段せり上がり + HideHold', '3段せり上がり + 市松模様', 'ミノデザイン変化 + 固定猶予減少'], 
        correct: '3段せり上がり + 市松模様' 
    },
    { 
        question: 'Q19 19面3枚目のスペカでは、ボムを使うとどうなる？', 
        choices: ['再度せり上がりが発生する', 'ボムが消費されるだけで何も起きない', 'クラッシュする'], 
        correct: '再度せり上がりが発生する' 
    },
    { 
        question: 'Q20 20面2枚目のスペカでは、何が起こる？', 
        choices: ['1,3段目にせり上がり + 2,4段目に空白せり上がり', '消えロール + 落下速度低下', '地形リセット + BIGモード化'], 
        correct: '地形リセット + BIGモード化' 
    },
    { 
        question: 'Q21 21面1枚目のスペカでは、何が起こる？', 
        choices: ['地形が隠れる', '5段せり上がり + NoHold', 'EXCHG FIELD'], 
        correct: 'EXCHG FIELD' 
    },
    { 
        question: 'Q22 22面2枚目のスペカでは、何が起こる？', 
        choices: ['16段せり上がり', 'CYCLONE + HideHold', '最上段のみ見える穴バラ出現'], 
        correct: '16段せり上がり' 
    },
    { 
        question: 'Q23 23面3枚目のスペカは、ワールドルールでは何が起こる？', 
        choices: ['回転する度にミノが変化', 'TミノとIミノがOミノに変化', '違いはない'], 
        correct: 'TミノとIミノがOミノに変化' 
    },
    { 
        question: 'Q24 24面4枚目のスペカでは、何が起こる？', 
        choices: ['NoNext', '地形の左右反転', 'せり上がり + ご先祖様'], 
        correct: 'せり上がり + ご先祖様' 
    },
    { 
        question: 'Q25 24面の最後（25面）では何が起こる？', 
        choices: ['ライン消去が出来なくなる', '消えロール', 'ご先祖様が出現'], 
        correct: '消えロール' 
    },
    { 
        question: 'Q26 26面1枚目のスペカでは、何が起こる？', 
        choices: ['30秒間に15段せり上がり', '35秒間に20段せり上がり', '40秒間に25段せり上がり'], 
        correct: '35秒間に20段せり上がり' 
    },
    { 
        question: 'Q27 27面3枚目のスペカでは、何が起こる？', 
        choices: ['ダークガベージ14段 + X-RAY', 'ダークガベージ14段 + HideHold', 'ダークガベージ14段 + NoHold'], 
        correct: 'ダークガベージ14段 + X-RAY' 
    },
    { 
        question: 'Q28 28面4枚目のスペカでは、何が起こる？', 
        choices: ['', '', ''], 
        correct: '' 
    },
    { 
        question: 'Q29 29面では、何が起こる？', 
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
    if (score === quizLength) {
        result = "合格";
        resultMessage.textContent = "全部答えられるとは...さてはQBKだな？？？？？";
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
