function checkAnswer(task) {
    let answer;
    let correctAnswer;
    
    switch(task) {
    case 1:
    correctAnswer = '213'; // Верный ответ для Задания 1
    answer = document.getElementById('answer1').value.trim();
    break;
    case 2:
    correctAnswer = '2314'; // Верный ответ для Задания 2
    answer = document.getElementById('answer2').value.trim();
    break;
    case 3:
    correctAnswer = '123'; // Верный ответ для Задания 3
    answer = document
    .getElementById('answer3').value.trim();
    break;
    }
    
    if (answer === correctAnswer) {
    alert('Ответ верный!');
    } else {
    alert('Ответ неверный, попробуйте снова.');
    }
    }