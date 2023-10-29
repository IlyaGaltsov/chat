"use strict"

const btn = document.getElementById('btn');
const stopWord = 'Stop';

function getValue() {
    let userValue = document.getElementById('userInput').value;
    if (userValue === stopWord) {
        sendMessage('До свидания!');
        document.getElementById('userInput').value = '';
        stopDialog = true;
    } else if (userValue === "") {
        alert("Please enter a message");
    } else {
        document.getElementById('userInput').value = '';
        botResponse(userValue); // запуск случайного ответа бота
        return userValue;
    }
}

function sendMessage(userValue) {
    const chatArea = document.querySelector('.chat_message');
    const userText = document.createElement('p');
    userText.textContent = userValue;
    chatArea.appendChild(userText);
}

btn.addEventListener('click', () => {
    const value = getValue();
    sendMessage(value);
    autoStopDialog();
});