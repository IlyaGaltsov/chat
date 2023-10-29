"use strict"

let stopDialog = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function botResponse(userValue) {
    const responses = [
        "Скажите еще что-нибудь",
        "Интересно, расскажите подробнее",
        "Продолжайте, пожалуйста",
        "Очень интерестно",
        "А вы знали что в Грузии больше всего грузинов :)"
    ];
    const randomTime = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000; // случайное время от 3 до 10 секунд
    await sleep(randomTime);
    if (!stopDialog) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        sendMessage(responses[randomIndex]);
    }
}

function autoStopDialog() {
const randomStopTime = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // случайное время от 5 до 15 секунд
setTimeout(() => {
    if (!stopDialog) {
    stopDialog = true;
    sendMessage('Извините, до свидания.');
    }
}, randomStopTime);
}

function sendMessage(userValue) {
    const chatArea = document.querySelector('.chat_message');
    const userText = document.createElement('p');
    userText.textContent = userValue;
    chatArea.appendChild(userText);
}
