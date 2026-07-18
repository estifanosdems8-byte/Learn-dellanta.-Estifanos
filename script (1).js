// Quiz System

function answer(){

document.getElementById("result").innerHTML =
"Correct Answer! 🎉";

}



// Certificate Generator

function certificate(){

let name =
document.getElementById("name").value;


if(name===""){

document.getElementById("certificateText").innerHTML =
"Please enter your name";

}

else{

document.getElementById("certificateText").innerHTML =
"🏆 Certificate<br><br>" +
"This certificate is awarded to<br>" +
"<b>" + name + "</b><br><br>" +
"For completing Learn Delanta Estifanos Course";

}

}



// Simple Login Message

const loginButton =
document.querySelector("#login button");


if(loginButton){

loginButton.onclick=function(){

alert("Login Successful!");

}

}



// Register Message

const registerButton =
document.querySelector("#register button");


if(registerButton){

registerButton.onclick=function(){

alert("Account Created Successfully!");

}

}



// Start Learning Button

const startButton =
document.querySelector(".hero button");


if(startButton){

startButton.onclick=function(){

document
.getElementById("courses")
.scrollIntoView({
behavior:"smooth"
});

}

}



// Dark Mode Function

function darkMode(){

document.body.classList.toggle("dark");

}const questions = [

{
q:"5 + 5 = ?",
a:["8","10","12","15"],
correct:"10"
},

{
q:"10 x 10 = ?",
a:["50","100","150","200"],
correct:"100"
},

{
q:"Square root of 64?",
a:["6","7","8","9"],
correct:"8"
}

];


let qIndex=0;
let score=0;


function loadQuiz(){

let q=questions[qIndex];

document.getElementById("quizQuestion").innerHTML=q.q;


let box=document.getElementById("quizAnswers");

box.innerHTML="";


q.a.forEach(answer=>{

let btn=document.createElement("button");

btn.innerHTML=answer;


btn.onclick=function(){

if(answer==q.correct){

score++;

}

};

box.appendChild(btn);

});


}


document.getElementById("nextQuestion").onclick=function(){

qIndex++;


if(qIndex < questions.length){

loadQuiz();

}

else{

document.getElementById("quizQuestion").innerHTML=
"Quiz Finished 🎉";


document.getElementById("quizScore").innerHTML=
"Your Score: "+score+"/"+questions.length;


}

};


loadQuiz();function registerStudent(){

let name =
document.getElementById("regName").value;

let email =
document.getElementById("regEmail").value;

let password =
document.getElementById("regPassword").value;


localStorage.setItem("studentEmail",email);

localStorage.setItem("studentPassword",password);

localStorage.setItem("studentName",name);


document.getElementById("accountMessage").innerHTML =
"Account Created Successfully ✅";

}



function loginStudent(){

let email =
document.getElementById("loginEmail").value;

let password =
document.getElementById("loginPassword").value;


if(
email==localStorage.getItem("studentEmail")
&&
password==localStorage.getItem("studentPassword")
){

document.getElementById("accountMessage").innerHTML =
"Welcome "+localStorage.getItem("studentName")+" 🎉";

}

else{

document.getElementById("accountMessage").innerHTML =
"Wrong Email or Password ❌";

}

}function showStudent(){

let name = localStorage.getItem("studentName");


if(name){

document.getElementById("studentWelcome").innerHTML =
"Welcome, " + name + " 🎓";

}

}


showStudent(); function searchCourse(){

let input =
document.getElementById("searchInput")
.value.toLowerCase();


let courses =
document.querySelectorAll("#courseResult p");


courses.forEach(function(course){

if(course.innerHTML.toLowerCase().includes(input)){

course.style.display="block";

}

else{

course.style.display="none";

}

});

}function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

}

window.addEventListener("load",function(){

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark-mode");

}

});let progress = 0;

function increaseProgress(){

if(progress < 100){

progress += 10;

document.getElementById("progressBar").style.width =
progress + "%";

document.getElementById("progressText").innerHTML =
progress + "% Completed";

localStorage.setItem("progress", progress);

}

}

window.addEventListener("load", function(){

let saved = localStorage.getItem("progress");

if(saved){

progress = Number(saved);

document.getElementById("progressBar").style.width =
progress + "%";

document.getElementById("progressText").innerHTML =
progress + "% Completed";

}

});function rate(stars){

document.getElementById("ratingResult").innerHTML =
"Thank you! You rated this website " + stars + " ⭐";

localStorage.setItem("websiteRating", stars);

}

window.addEventListener("load", function(){

let savedRating = localStorage.getItem("websiteRating");

if(savedRating){

document.getElementById("ratingResult").innerHTML =
"Your saved rating: " + savedRating + " ⭐";

}

});function addComment(){

let comment =
document.getElementById("commentInput").value;

if(comment.trim()==""){
return;
}

let comments =
JSON.parse(localStorage.getItem("comments")) || [];

comments.push(comment);

localStorage.setItem("comments",
JSON.stringify(comments));

showComments();

document.getElementById("commentInput").value="";

}

function showComments(){

let comments =
JSON.parse(localStorage.getItem("comments")) || [];

let list =
document.getElementById("commentList");

list.innerHTML="";

comments.forEach(function(item){

list.innerHTML +=
'<div class="comment-box">'+item+'</div>';

});

}

window.addEventListener("load", showComments);function generateCertificate(){

let student =
localStorage.getItem("studentName") || "Student";

document.getElementById("certificateName").innerHTML =
student;

let today =
new Date().toLocaleDateString();

document.getElementById("certificateDate").innerHTML =
"Date: " + today;

}function submitAssignment(){

let file =
document.getElementById("assignmentFile").files[0];

if(file){

document.getElementById("assignmentMessage").innerHTML =
"✅ Assignment submitted: " + file.name;

}else{

document.getElementById("assignmentMessage").innerHTML =
"❌ Please select a file.";

}

}function searchCourse(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let courses = document.querySelectorAll("#courseResult p");

  courses.forEach(course=>{
    let text = course.innerText.toLowerCase();

    if(text.includes(input)){
      course.style.display="block";
    }else{
      course.style.display="none";
    }
  });
}  function searchCourse(){
  let input = document.getElementById("searchInput").value.toLowerCase();

  let courses = document.querySelectorAll("#courseResult p");

  courses.forEach(function(course){
    if(course.innerText.toLowerCase().includes(input)){
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
} let score = 0;
let questionNumber = 0;

let questions = [
  {
    q:"What is 5 + 5?",
    a:"10"
  },
  {
    q:"What is the capital of Ethiopia?",
    a:"Addis Ababa"
  },
  {
    q:"How many planets are in the solar system?",
    a:"8"
  }
];

function showQuestion(){
  document.getElementById("quizQuestion").innerHTML =
  questions[questionNumber].q;
}

function answer(correct){
  if(correct){
    score++;
  }
  document.getElementById("quizScore").innerHTML =
  "Score: " + score;
}

function nextQuestion(){
  questionNumber++;

  if(questionNumber < questions.length){
    showQuestion();
  }else{
    document.getElementById("quizScore").innerHTML =
    "Finished! Score: " + score;
  }
}

showQuestion();function checkAnswer(correct){

if(correct){
document.getElementById("result").innerHTML="✅ Correct!";
}
else{
document.getElementById("result").innerHTML="❌ Try Again";
}

}// ===== የቪዲዮ ማጣሪያ =====
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // ንቁ የሆነውን አዝራር ቀይር
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
});// ===== የፈተና ተግባር =====
let currentQuestion = 1;
const totalQuestions = 5;
const answers = {
    q1: 'c',
    q2: 'b',
    q3: 'c',
    q4: 'c',
    q5: 'd'
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
    document.querySelector('.quiz-progress span').textContent = `ጥያቄ ${num}/${totalQuestions}`;
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
    else if (score >= 4) message = '🌟 በጣም ጥሩ! ቀጥል!';
    else if (score >= 3) message = '📚 ጥሩ! ትንሽ ተጨማሪ አጥና!';
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