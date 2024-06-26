// Target number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;
    
    // Get the feedback paragraph
    const feedback = document.getElementById('feedback');

    // Provide feedback to the user
    if (userGuess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed the right number (${targetNumber}) in ${attempts} attempts.`;
    } else if (userGuess > targetNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else if (userGuess < targetNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Please enter a valid number.';
    }
}
