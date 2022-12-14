let pressedKeys = []; // Keys user has pressed
let guideKeys = []; // All keys user needs to press to finish a guide
let keysToPress = []; // Track keys a user still needs to press to finish a guide
let guideStarted = false;
let styleElem = document.head.appendChild(document.createElement("style"));


// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    let name = event.key;
    // When key pressed call keyPressed method and pass in sound to play and name of key
    switch (name) {
        case "q": keyPressed("../Sounds/C3.mp3", "q"); break;
        case "w": keyPressed("../Sounds/D3.mp3", "w"); break;
        case "e": keyPressed("../Sounds/E3.mp3", "e"); break;
        case "r": keyPressed("../Sounds/F3.mp3", "r"); break;
        case "t": keyPressed("../Sounds/G3.mp3", "t"); break;
        case "y": keyPressed("../Sounds/A3.mp3", "y"); break;
        case "u": keyPressed("../Sounds/B3.mp3", "u"); break;

        case "a": keyPressed("../Sounds/C4.mp3", "a"); break;
        case "s": keyPressed("../Sounds/D4.mp3", "s"); break;
        case "d": keyPressed("../Sounds/E4.mp3", "d"); break;
        case "f": keyPressed("../Sounds/F4.mp3", "f"); break;
        case "g": keyPressed("../Sounds/G4.mp3", "g"); break;
        case "h": keyPressed("../Sounds/A4.mp3", "h"); break;
        case "j": keyPressed("../Sounds/B4.mp3", "j"); break;

        case "z": keyPressed("../Sounds/C5.mp3", "z"); break;
        case "x": keyPressed("../Sounds/D5.mp3", "x"); break;
        case "c": keyPressed("../Sounds/E5.mp3", "c"); break;
        case "v": keyPressed("../Sounds/F5.mp3", "v"); break;
        case "b": keyPressed("../Sounds/G5.mp3", "b"); break;
        case "n": keyPressed("../Sounds/A5.mp3", "n"); break;
        case "m": keyPressed("../Sounds/B5.mp3", "m"); break;


        // Black keys
        case "1": keyPressed("../Sounds/Db3.mp3", "1"); break;
        case "2": keyPressed("../Sounds/Eb3.mp3", "2"); break;
        case "3": keyPressed("../Sounds/Gb3.mp3", "3"); break;
        case "4": keyPressed("../Sounds/Ab3.mp3", "4"); break;
        case "5": keyPressed("../Sounds/Bb3.mp3", "5"); break;

        case "6": keyPressed("../Sounds/Db4.mp3", "6"); break;
        case "7": keyPressed("../Sounds/Eb4.mp3", "7"); break;
        case "8": keyPressed("../Sounds/Gb4.mp3", "8"); break;
        case "9": keyPressed("../Sounds/Ab4.mp3", "9"); break;
        case "0": keyPressed("../Sounds/Bb4.mp3", "0"); break;

        case "-": keyPressed("../Sounds/Db5.mp3", "-"); break;
        case "=": keyPressed("../Sounds/Eb5.mp3", "="); break;
        case "Backspace": keyPressed("../Sounds/Gb5.mp3", "backspace"); break;
        case "]": keyPressed("../Sounds/Ab5.mp3", "]"); break;
        case "#": keyPressed("../Sounds/Bb5.mp3", "#"); break;
    }

    console.log(pressedKeys) // Print list of pressed keys
    document.getElementById("noteList").innerHTML = pressedKeys; // List everything pressed so far

    if(guideStarted === true) { // Update list display if user started a guide
        document.getElementById("toPressList").innerHTML = keysToPress; // List keys user needs to press to finish tutorial
        highlightGuideKey(name)
        // var requiredKey = keysToPress[0].match(/\((.*)\)/); // Get
        // requiredKey = requiredKey[1];
        // document.getElementById(requiredKey).style.background = '#6d64ef';
    }
}, false);


function keyPressed(sound, name){
    PlaySound(sound) // Play sound of note
    changeKeyColor(name); // Change color of key when pressed
}

function clearPressed(){
    pressedKeys = [];
    document.getElementById("noteList").innerHTML = "";
}

PlaySound = function (sound) {
    let audio = new Audio(sound);
    audio.loop = false;
    audio.play();
}

function highlightGuideKey(){
    var requiredKey = keysToPress[0].match(/\((.*)\)/); // Get key
    requiredKey = requiredKey[1];
    console.log("Key to Press[0]:   " + keysToPress[0]);
    console.log("Required Key:   " + requiredKey);

    let numKey = getKeyFromBlackKey(requiredKey);

    if(numKey !== "") {
        console.log("numKey!!!:  " + numKey);
        // let styleElem = document.head.appendChild(document.createElement("style"));
        // styleElem.innerHTML = "#" + numKey + ":after {background: ##6d64ef;}"
        // document.getElementById(numKey).style.background = '#6d64ef';
        styleElem.innerHTML = "#a:after {background: ##ffffff;}"
    }else{
        document.getElementById(requiredKey).style.background = '#6d64ef';
        styleElem.innerHTML = "#a:after {background: ##ffffff;}"
    }
    styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#a:after {background: ##ffffff;}"
    styleElem.innerHTML = "#q:after {background: ##ffffff;}"
    styleElem.innerHTML = "#w:after {background: ##ffffff;}"

}

function changeKeyColor(name){
    // let styleElem = document.head.appendChild(document.createElement("style"));
    let numKey = getKeyFromBlackKey(name)

    if(numKey !== ""){ // numKey was changed so black key was pressed
        styleElem.innerHTML = "#" + numKey + ":after {background: #5f5f5f;}"
        removeGuideDisplayKey()
        document.addEventListener('keyup', (event) => { // Add event listener for keyup
            if(event.key === name) {
                styleElem.innerHTML = "#" + numKey + ":after {background: #270349FF;}" // Change key color back to white when key up
            }
        });

    } else { // white key was pressed
        document.getElementById(name).style.background = '#dedede'; // Change color while key down
        removeGuideDisplayKey()
        document.addEventListener('keyup', (event) => { // Add event listener for keyup
            if(event.key === name) {
                document.getElementById(name).style.background = '#ffffff';
            } // Change key color back to white when key up
        });
    }

    // Remove key from keysToPress array
    function removeGuideDisplayKey(){
        pressedKeys.push(name); // Add pressed key onto array

        if(guideStarted === true) {
            let guideOption = keysToPress[0];
            var requiredKey = keysToPress[0].match(/\((.*)\)/); // Get
            console.log("result 1:  " + requiredKey[1] + "  result0:  " + requiredKey[0])
            if (requiredKey[1] === name) { // If the expected key is the key pressed
                keysToPress.shift(); // Remove first element from list - i.e. removing key to press
            }
        }
    }

    if(guideStarted === true) {
        document.getElementById("toPressList").innerHTML = keysToPress; // Refresh keysToPress list
    }
}

// Start tutorial on button press
function guideControl(type){
    console.log("Tutorial to start: " + type);

    const white = document.querySelectorAll('.white');

    white.forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });
    const black = document.querySelectorAll('.white.black');

    black.forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });

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
        case 'C major':
            guideKeys = ['C(a)','D(s)','E(d)','F(f)','G(g)','A(h)','B(j)','C(z)']; // Set keys
            updateDisplay(); // Update display on
            break;
        case 'C minor':
            guideKeys = ['C(a)','D(s)','Eb(7)','F(f)','G(g)','Ab(9)','B(j)','C(z)'];
            updateDisplay();
            break;
        case 'D major':
            guideKeys = ['D(s)','E(d)','F#(8)','G(g)','A(h)','B(j)','C#(-)','D(x)'];
            updateDisplay();
            break;
        case 'D minor':
            guideKeys = ['D(s)','E(d)','F(f)','G(g)','A(h)','Bb(0)','C#(-)','D(x)'];
            updateDisplay();
            break;
        case 'E major':
            guideKeys = ['E(d)','F#(8)','G#(9)','A(h)','B(j)','C#(-)','D#(=)','E(c)'];
            updateDisplay();
            break;
        case 'E minor':
            guideKeys = ['E(d)','F#(8)','G(g)','A(h)','B(j)','C(z)','D#(=)','E(c)'];
            updateDisplay();
            break;
        case 'F major':
            guideKeys = ['F(f)','G(g)','A(h)','Bb(0)','C(z)','D(x)','E(c)','F(v)'];
            updateDisplay();
            break;
        case 'F minor':
            guideKeys = ['F(f)','G(g)','Ab(9)','Bb(0)','C(z)','Db(-)','E(c)','F(v)'];
            updateDisplay();
            break;
        case 'G major':
            guideKeys = ['G(g)','A(h)','B(j)','C(z)','D(x)','E(c)','F#(<-)','G(b)'];
            updateDisplay();
            break;
        case 'G minor':
            guideKeys = ['G(g)','A(h)','Bb(0)','C(z)','D(x)','Eb(=)','F#(<-)','G(b)'];
            updateDisplay();
            break;
        case 'A major':
                guideKeys = ['A(y)','B(u)','C#(6)','D(s)','E(d)','F#(8)','G#(9)','A(h)'];
            updateDisplay();
            break;
        case 'A minor':
            guideKeys = ['A(y)','B(u)','C(a)','D(s)','E(d)','F(f)','G#(9)','A(h)'];
            updateDisplay();
            break;
        case 'B major':
            guideKeys = ['B(u)','C#(6)','D#(7)','E(d)','F#(8)','G#(9)','A#(0)','B(j)'];
            updateDisplay();
            break;
        case 'B minor':
            guideKeys = ['B(u)','C#(6)','D(s)','E(d)','F#(8)','G(g)','A#(0)','B(j)'];
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
        case "6": blackKey = "a"; break;
        case "7": blackKey = "s"; break;
        case "8": blackKey = "f"; break;
        case "9": blackKey = "g"; break;
        case "0": blackKey = "h"; break;
        case "-": blackKey = "z"; break;
        case "=": blackKey = "x"; break;
        case "backspace": blackKey = "v"; break;
        case "]": blackKey = "b"; break;
        case "#": blackKey = "n"; break;
        default: break;
    }

    return blackKey;
}
