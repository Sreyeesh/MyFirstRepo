// script.js

document.getElementById('translateBtn').addEventListener('click', function() {
    const greetings = [
        'Hello World!',
        '¡Hola Mundo!',
        'Bonjour le monde!',
        'Hallo Welt!',
        'Ciao Mondo!',
        'こんにちは世界！',
        '안녕하세요 세계!',
        'Привет, мир!'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting').innerText = randomGreeting;
});
