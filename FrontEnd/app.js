let pressedKeys = []; // Keys user has pressed
let guideKeys = []; // All keys user needs to press to finish a guide
let keysToPress = []; // Track keys a user still needs to press to finish a guide
let guideStarted = false;

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    let name = event.key;
    // When key pressed call keyPressed method and pass in sound to play and name of key
    switch (name) {
        case "q": keyPressed("../Sounds/key01.mp3", "q"); break;
        case "w": keyPressed("../Sounds/key02.mp3", "w"); break;
        case "e": keyPressed("../Sounds/key03.mp3", "e"); break;
        case "r": keyPressed("../Sounds/key04.mp3", "r"); break;
        case "t": keyPressed("../Sounds/key05.mp3", "t"); break;
        case "y": keyPressed("../Sounds/key06.mp3", "y"); break;
        case "u": keyPressed("../Sounds/key07.mp3", "u"); break;

        case "i": keyPressed("../Sounds/key08.mp3", "i"); break;
        case "o": keyPressed("../Sounds/key09.mp3", "o"); break;
        case "p": keyPressed("../Sounds/key10.mp3", "p"); break;
        case "[": keyPressed("../Sounds/key11.mp3", "m"); break;
        case "a": keyPressed("../Sounds/key12.mp3", "a"); break;
        case "s": keyPressed("../Sounds/key13.mp3", "s"); break;
        case "d": keyPressed("../Sounds/key14.mp3", "d"); break;

        case "f": keyPressed("../Sounds/key15.mp3", "f"); break;
        case "g": keyPressed("../Sounds/key16.mp3", "g"); break;
        case "h": keyPressed("../Sounds/key17.mp3", "h"); break;
        case "j": keyPressed("../Sounds/key18.mp3", "j"); break;
        case "k": keyPressed("../Sounds/key19.mp3", "k"); break;
        case "l": keyPressed("../Sounds/key20.mp3", "l"); break;
        case ";": keyPressed("../Sounds/key21.mp3", ";"); break;


        // Black keys
        case "1": keyPressed("../Sounds/key24.mp3", "1"); break;
        case "2": keyPressed("../Sounds/key24.mp3", "2"); break;
        case "3": keyPressed("../Sounds/key24.mp3", "3"); break;
        case "4": keyPressed("../Sounds/key24.mp3", "4"); break;
        case "5": keyPressed("../Sounds/key24.mp3", "5"); break;

        case "6": keyPressed("../Sounds/key24.mp3", "6"); break;
        case "7": keyPressed("../Sounds/key24.mp3", "7"); break;
        case "8": keyPressed("../Sounds/key24.mp3", "8"); break;
        case "9": keyPressed("../Sounds/key24.mp3", "9"); break;
        case "0": keyPressed("../Sounds/key24.mp3", "0"); break;

        case "-": keyPressed("../Sounds/key24.mp3", "-"); break;
        case "=": keyPressed("../Sounds/key24.mp3", "="); break;
        case "Backspace": keyPressed("../Sounds/key24.mp3", "backspace"); break;
        case "]": keyPressed("../Sounds/key24.mp3", "]"); break;
        case "#": keyPressed("../Sounds/key24.mp3", "#"); break;
    }

    console.log(pressedKeys) // Print list of pressed keys
    document.getElementById("noteList").innerHTML = pressedKeys; // List everything pressed so far

    if(guideStarted === true) { // Update list display if user started a guide

        document.getElementById("toPressList").innerHTML = keysToPress; // List keys user needs to press to finish tutorial
    }
}, false);


function keyPressed(sound, name){
    PlaySound(sound) // Play sound of note
    changeKeyColor(name); // Change color of key when pressed
}

PlaySound = function (sound) {
    let audio = new Audio(sound);
    audio.loop = false;
    audio.play();
}

function changeKeyColor(name){
    let styleElem = document.head.appendChild(document.createElement("style"));
    let numKey = getKeyFromBlackKey(name)

    if(numKey !== ""){ // numKey was changed so black key was pressed
        styleElem.innerHTML = "#" + numKey + ":after {background: #323232;}"

        pressedKeys.push(name); // Add pressed key onto array

        if (keysToPress[0] === name) { // If the expected key is the key pressed
            keysToPress.shift(); // Remove first element from list - i.e. removing key to press
        }

        document.addEventListener('keyup', () => { // Add event listener for keyup
            styleElem.innerHTML = "#" + numKey +":after {background: #270349FF;}" // Change key color back to white when key up
        });

    } else { // white key was pressed
        document.getElementById(name).style.background = '#dedede'; // Change color while key down
        pressedKeys.push(name); // Add pressed key onto array

        if (keysToPress[0] === name) { // If the expected key is the key pressed
            keysToPress.shift(); // Remove first element from list - i.e. removing key to press
        }

        document.addEventListener('keyup', () => { // Add event listener for keyup
            document.getElementById(name).style.background = '#ffffff'; // Change key color back to white when key up
        });
    }

    if(guideStarted === true) {
        document.getElementById("toPressList").innerHTML = keysToPress; // Refresh keysToPress list
    }
}

// Start tutorial on button press
function guideControl(type){
    console.log("Tutorial to start: " + type);

    document.getElementById('tutorialKeyDisplay').innerHTML =
        `<div>
            <b>Keys for song:</b>
            <p id="guideList"></p>
        </div>
    
        <div>
            <b>To press:</b>
            <p id="toPressList"></p>
        </div>`

    switch (type) {
        case 1:
            guideKeys = ['a','a','a','s','d']; // Set keys
            updateDisplay(); // Update display on
            break;
        case 2:
            guideKeys = ['1','2','3'];
            updateDisplay();
            break;
        case "close":
            document.getElementById('tutorialKeyDisplay').innerHTML = "";
            guideStarted = false;
            break;

        default:
            break;
    }

    function updateDisplay(){
        guideStarted = true;
        keysToPress = guideKeys; // Set keysToPress array as list of guide keys -> show user what keys they need to press
        document.getElementById("guideList").innerHTML = guideKeys; // Display guide keys -> all keys for song
        document.getElementById("toPressList").innerHTML = keysToPress; // Display keys user needs to press
    }
}


function getKeyFromBlackKey(name){
    let blackKey = "";

    switch (name) {
        case "1": blackKey = "q"; break;
        case "2": blackKey = "w"; break;
        case "3": blackKey = "r"; break;
        case "4": blackKey = "t"; break;
        case "5": blackKey = "y"; break;
        case "6": blackKey = "i"; break;
        case "7": blackKey = "o"; break;
        case "8": blackKey = "m"; break;
        case "9": blackKey = "a"; break;
        case "0": blackKey = "s"; break;
        case "-": blackKey = "f"; break;
        case "=": blackKey = "g"; break;
        case "backspace": blackKey = "j"; break;
        case "]": blackKey = "k"; break;
        case "#": blackKey = "l"; break;
        default: break;
    }

    return blackKey;
}
