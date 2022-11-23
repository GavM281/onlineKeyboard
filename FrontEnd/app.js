console.log("hello");

let pressedKeys = [];
let guideKeys = ['a','a','a','s','d'];
let keysToPress = guideKeys;
console.log("Keys to press: " + keysToPress);
document.getElementById("guideList").innerHTML = guideKeys;
document.getElementById("toPressList").innerHTML = keysToPress;
// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    let name = event.key;

    switch (name) {
        case "a":
            keyPressed("Sounds/key01.mp3", "a");
            break;
        case "s":
            keyPressed("Sounds/key02.mp3", "s");
            break;
        case "d":
            keyPressed("Sounds/key03.mp3", "d");
            break;
        case "f":
            keyPressed("Sounds/key04.mp3", "f");
            break;
        case "g":
            keyPressed("Sounds/key05.mp3", "g");
            break;
        case "h":
            keyPressed("Sounds/key06.mp3", "h");
            break;
        case "j":
            keyPressed("Sounds/key07.mp3", "j");
            break;
    }

    console.log(pressedKeys)
    // Update list display
    document.getElementById("noteList").innerHTML = pressedKeys;
    document.getElementById("toPressList").innerHTML = keysToPress;
}, false);


PlaySound = function (sound) {
    var audio = new Audio(sound);
    audio.loop = false;
    audio.play();
}

function keyPressed(sound, name){
    PlaySound(sound) // Play sound of note
    pressedKeys.push(name); // Add pressed key onto array
    if(keysToPress[0]===name){ // If the expected key is the key pressed
        keysToPress.shift(); // Remove first element from list - i.e. removing key to press
    }
}