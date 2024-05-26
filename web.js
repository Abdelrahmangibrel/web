document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
 const username = document.getElementById('username').value;
        let score = 0;
    const form = event.target;
    const answers = form.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        score += parseInt(answer.value);
    });
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    resultText.textContent = `${username}, your score is ${score}.`;
    resultDiv.style.display = 'block';
});
