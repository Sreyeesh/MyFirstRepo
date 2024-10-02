// script.js

document.getElementById("translateBtn").addEventListener("click", function() {
    // Toggle between English and Spanish
    const greetingElement = document.getElementById("greeting");
    
    if (greetingElement.innerText === "Hello World!") {
        greetingElement.innerText = "Hola Mundo!"; // Translates to Spanish
    } else {
        greetingElement.innerText = "Hello World!"; // Reverts back to English
    }
});
