// ===== የደረጃ ምርጫ =====
const gradeBtns = document.querySelectorAll('.grade-btn');
const gradeContents = document.querySelectorAll('.grade-content');

// መጀመሪያ ክፍል 9 እንዲታይ አድርግ
document.querySelector('.grade-content[data-grade="9"]').classList.add('active');
document.querySelector('.grade-btn[data-grade="9"]').classList.add('active');

gradeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        gradeBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const grade = this.dataset.grade;
        gradeContents.forEach(content => {
            content.classList.remove('active');
            if (content.dataset.grade === grade) {
                content.classList.add('active');
            }
        });
    });
});

// ===== የቪዲዮ ማጣሪያ =====
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        videoCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== የፈተና ተግባር =====
let currentQuestion = 1;
const totalQuestions = 4;
const answers = {
    q1: 'c',
    q2: 'b',
    q3: 'c',
    q4: 'c'
};

const questions = document.querySelectorAll('.quiz-question');
const prevBtn = document.querySelector('.quiz-prev');
const nextBtn = document.querySelector('.quiz-next');
const submitBtn = document.querySelector('.quiz-submit');
const resultDiv = document.querySelector('.quiz-result');
const scoreSpan = document.querySelector('.score-number');
const resultMessage = document.querySelector('.result-message');
const restartBtn = document.querySelector('.quiz-restart');
const progressFill = document.querySelector('.quiz-progress-fill');
const progressSpan = document.querySelector('.quiz-progress span');

function showQuestion(num) {
    questions.forEach((q, i) => {
        q.classList.toggle('active', i === num - 1);
    });
    prevBtn.disabled = num === 1;
    if (num === totalQuestions) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
    progressFill.style.width = ((num / totalQuestions) * 100) + '%';
    progressSpan.textContent = `ጥያቄ ${num}/${totalQuestions}`;
}

function getSelectedAnswer(questionNum) {
    const q = document.querySelector(`.quiz-question[data-question="${questionNum}"]`);
    const selected = q.querySelector('input[type="radio"]:checked');
    return selected ? selected.value : null;
}

function checkAnswer(questionNum) {
    const selected = getSelectedAnswer(questionNum);
    const q = document.querySelector(`.quiz-question[data-question="${questionNum}"]`);
    const options = q.querySelectorAll('.quiz-option');
    const feedback = q.querySelector('.quiz-feedback');
    
    options.forEach(opt => {
        opt.classList.remove('correct', 'wrong');
    });
    
    if (selected) {
        const correct = answers[`q${questionNum}`];
        options.forEach(opt => {
            const input = opt.querySelector('input[type="radio"]');
            if (input.value === correct) {
                opt.classList.add('correct');
            } else if (input.value === selected && selected !== correct) {
                opt.classList.add('wrong');
            }
        });
        feedback.textContent = selected === correct ? '✅ ትክክል ነው!' : '❌ ተሳስተሃል። ትክክለኛው መልስ: ' + correct;
        feedback.className = 'quiz-feedback show ' + (selected === correct ? 'correct' : 'wrong');
    } else {
        feedback.textContent = '⚠️ እባክህ መልስ ምረጥ!';
        feedback.className = 'quiz-feedback show';
    }
}

nextBtn.addEventListener('click', () => {
    checkAnswer(currentQuestion);
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

submitBtn.addEventListener('click', () => {
    checkAnswer(currentQuestion);
    let score = 0;
    for (let i = 1; i <= totalQuestions; i++) {
        const selected = getSelectedAnswer(i);
        if (selected && selected === answers[`q${i}`]) {
            score++;
        }
    }
    document.querySelector('.quiz-section > .quiz-buttons').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    questions.forEach(q => q.style.display = 'none');
    resultDiv.style.display = 'block';
    scoreSpan.textContent = score;
    
    let message = '';
    if (score === totalQuestions) message = '🏆 ፍጹም! በጣም ጥሩ!';
    else if (score >= 3) message = '🌟 በጣም ጥሩ! ቀጥል!';
    else if (score >= 2) message = '📚 ጥሩ! ትንሽ ተጨማሪ አጥና!';
    else message = '💪 ተጨማሪ ጥረት ያስፈልጋል! ቀጥል!';
    resultMessage.textContent = message;
});

restartBtn.addEventListener('click', () => {
    currentQuestion = 1;
    questions.forEach(q => {
        q.style.display = '';
        q.querySelectorAll('input[type="radio"]').forEach(inp => inp.checked = false);
        q.querySelector('.quiz-feedback').className = 'quiz-feedback';
    });
    document.querySelector('.quiz-section > .quiz-buttons').style.display = 'flex';
    document.querySelector('.quiz-progress').style.display = 'flex';
    resultDiv.style.display = 'none';
    showQuestion(1);
});
