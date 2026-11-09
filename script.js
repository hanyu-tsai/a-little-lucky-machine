
const button = document.getElementById("luckButton");
const result = document.getElementById("fortuneResult");
const candyResult = document.getElementById("candyResult");

// NEW: Get the two screens and Try Again button
const startScreen = document.getElementById("startScreen");
const resultScreen = document.getElementById("resultScreen");
const tryAgainButton = document.getElementById("tryAgainButton");

console.log("Button:", button);
console.log("Result:", result);

const fortunes = [
    "Something good is coming your way! ✨",
    "Today is your lucky day! 🍀",
    "A little surprise awaits you! 🎁",
    "Trust yourself. You've got this! 💗",
    "Sweet things take time! 🍬",
    "Someone is thinking of you! 💌",
    "Your next adventure is closer than you think! 🌷",
    "A beautiful coincidence is on its way! 🌟",
    "The universe has a sweet surprise for you! 🎀"
];

const candies = [
    "images/blue_stripes.png",
    "images/red_stripes.png",
    "images/green-stripes.png",
    "images/yellow_stripes.png",
    "images/red_stripes.png",
    "images/pink_stripes.png",
    "images/purple_stripes.png",
    "images/bluebrown_dots.png",
    "images/bluered_dots.png",
    "images/greenorange_dots.png",
];

button.addEventListener("click", function() {
    console.log("Button clicked!");

    const randomIndex = Math.floor(Math.random() * fortunes.length);

    result.textContent = fortunes[randomIndex];
    candyResult.src = candies[randomIndex];
    candyResult.hidden = false;
    result.style.display = "block";

    // NEW: Switch to Result Screen

    const machine = startScreen.querySelector("img");

    button.disabled = true;

    machine.addEventListener("animationend", function() {
        machine.classList.remove("shaking");

        startScreen.hidden = true;
        resultScreen.hidden = false;

        button.disabled = false;
    }, { once: true });

    machine.classList.add("shaking");

});

// NEW: Return to Start Screen
tryAgainButton.addEventListener("click", function() {
    resultScreen.hidden = true;
    startScreen.hidden = false;
});
