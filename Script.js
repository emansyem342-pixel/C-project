function toggleLesson(id) {
const box = document.getElementById(id);
box.style.display = box.style.display === "block" ? "none" : "block";
}


function loadQuiz() {
let container = document.getElementById("quiz-container");
quizData.forEach((q, i) => {
container.innerHTML += `
<div>
<p><strong>${i + 1}. ${q.question}</strong></p>
${q.options.map((op, idx) => `
<label>
<input type="radio" name="q${i}" value="${op}"> ${op}
</label><br>
`).join('')}
</div>
<hr>
`;
});
}


function submitQuiz() {
let score = 0;
quizData.forEach((q, i) => {
const answer = document.querySelector(`input[name='q${i}']:checked`);
if (answer && answer.value === q.correct) score++;
});
document.getElementById("result").innerText = `Your Score: ${score} / ${quizData.length}`;
}


window.onload = loadQuiz;
