// Функция для обновления прогресса
function updateProgress(correct) {
    // Получаем текущий прогресс из localStorage
    let progress = parseInt(localStorage.getItem('progress')) || 0;

    // Если ответ правильный, увеличиваем прогресс
    if (correct) {
        progress += 11; // Увеличиваем на 11% (9 заданий — 100%)
        if (progress > 100) progress = 100; // Ограничиваем максимум 100
    }

    // Сохраняем обновленный прогресс в localStorage
    localStorage.setItem('progress', progress);

    // Выводим прогресс в консоль для отладки (по желанию)
    console.log(`Текущий прогресс: ${progress}%`);
}

// Функция для проверки ответа
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var correctAnswer = "231"; // Правильный ответ (231)

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = "<p class='correct'>Правильный ответ!</p>";
        updateProgress(true); // Обновляем прогресс при правильном ответе
    } else {
        document.getElementById('result').innerHTML = "<p class='incorrect'>Неверный ответ. Попробуйте снова!</p>";
        updateProgress(false); // Неправильный ответ, прогресс не изменяется
    }
}

