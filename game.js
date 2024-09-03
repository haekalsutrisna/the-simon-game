var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3
    console.log(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber]; // Choose a random color

    gamePattern.push(randomChosenColour); // Add the chosen color to the game pattern

    console.log(randomChosenColour);
    console.log(gamePattern);

    animateButton(randomChosenColour); // Animate the chosen button

    return randomChosenColour;
}

// Function to animate the selected button
function animateButton(colour) {
    $("#" + colour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); // Select the button by its ID and apply the animation
}

// Function to play the sound based on the color
function playSound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

// Handle button clicks
$("button").click(function() {
    var buttonID = this.id; // Get the ID of the button that was clicked

    animateButton(buttonID); // Animate the clicked button
    playSound(buttonID); // Play sound based on the button clicked

    // Additional game logic can be added here, like checking the user's sequence
});

