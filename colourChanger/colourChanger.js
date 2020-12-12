document.addEventListener("DOMContentLoaded", function (event) {

    let shufflecolours = ["Pink", "Lightblue", "Yellow", "Red", "Purple", "White", "Green", "Orange", "Brown", "Gold"];
    let flipperBtn = document.getElementById("flipperBtn");
    let colourName = document.getElementById("colourName");

    flipperBtn.addEventListener("click", function () {
        // get random number between 0-9 (not including 9) shuffled colours
        let randomNumber = generateRandomNumber();
        document.body.style.backgroundColor = shufflecolours[randomNumber];
        colourName.style.color = shufflecolours[randomNumber];
        colourName.textContent = shufflecolours[randomNumber];
    });

    function generateRandomNumber() {
        return Math.floor(Math.random() * shufflecolours.length);
    }
});
 