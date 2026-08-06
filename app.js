const quizData = [
    {
        question: "বাংলাদেশের রাজধানী কোথায়?",
        options: ["চট্টগ্রাম", "ঢাকা", "সিলেট", "রাজশাহী"],
        answer: "ঢাকা"
    },
    {
        question: "জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত?",
        options: ["সাভার", "গাজীপুর", "নারায়ণগঞ্জ", "টঙ্গী"],
        answer: "সাভার"
    },
    {
        question: "মুক্তিযুদ্ধ কত সালে সংঘটিত হয়?",
        options: ["১৯৫২", "১৯৬৯", "১৯৭১", "১৯৯০"],
        answer: "১৯৭১"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuiz() {
    resetState();
    let currentQuiz = quizData[currentQuestion];
    questionEl.innerText = `${currentQuestion + 1}. ${currentQuiz.question}`;

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectOption(option, currentQuiz.answer);
        optionsEl.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";
}

function selectOption(selected, correct) {
    const buttons = optionsEl.getElementsByTagName("button");
    Array.from(buttons).forEach(button => {
        if (button.innerText === correct) {
            button.style.backgroundColor = "#28a745";
            button.style.color = "white";
        } else if (button.innerText === selected) {
            button.style.backgroundColor = "#dc3545";
            button.style.color = "white";
        }
        button.disabled = true;
    });

    if (selected === correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("quiz").style.display = "none";
        nextBtn.style.display = "none";
        resultEl.innerText = `অত্যন্ত চমৎকার! আপনার মোট স্কোর: ${score} / ${quizData.length}`;
    }
}

loadQuiz();
