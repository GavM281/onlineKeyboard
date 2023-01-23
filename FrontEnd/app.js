let pressedKeys = []; // Keys user has pressed
let guideKeys = []; // All keys user needs to press to finish a guide
let keysToPress = []; // Track keys a user still needs to press to finish a guide
let guideStarted = false;
let styleElem = document.head.appendChild(document.createElement("style"));
let kbsound = 'Piano';


// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    let name = event.key;
    // When key pressed call keyPressed method and pass in sound to play and name of key
    switch(kbsound){
        case 'Piano':
            switch (name) {
                case "q": keyPressed("../Sounds/piano/C3.mp3", "q"); break;
                case "w": keyPressed("../Sounds/piano/D3.mp3", "w"); break;
                case "e": keyPressed("../Sounds/piano/E3.mp3", "e"); break;
                case "r": keyPressed("../Sounds/piano/F3.mp3", "r"); break;
                case "t": keyPressed("../Sounds/piano/G3.mp3", "t"); break;
                case "y": keyPressed("../Sounds/piano/A3.mp3", "y"); break;
                case "u": keyPressed("../Sounds/piano/B3.mp3", "u"); break;
        
                case "a": keyPressed("../Sounds/piano/C4.mp3", "a"); break;
                case "s": keyPressed("../Sounds/piano/D4.mp3", "s"); break;
                case "d": keyPressed("../Sounds/piano/E4.mp3", "d"); break;
                case "f": keyPressed("../Sounds/piano/F4.mp3", "f"); break;
                case "g": keyPressed("../Sounds/piano/G4.mp3", "g"); break;
                case "h": keyPressed("../Sounds/piano/A4.mp3", "h"); break;
                case "j": keyPressed("../Sounds/piano/B4.mp3", "j"); break;
        
                case "z": keyPressed("../Sounds/piano/C5.mp3", "z"); break;
                case "x": keyPressed("../Sounds/piano/D5.mp3", "x"); break;
                case "c": keyPressed("../Sounds/piano/E5.mp3", "c"); break;
                case "v": keyPressed("../Sounds/piano/F5.mp3", "v"); break;
                case "b": keyPressed("../Sounds/piano/G5.mp3", "b"); break;
                case "n": keyPressed("../Sounds/piano/A5.mp3", "n"); break;
                case "m": keyPressed("../Sounds/piano/B5.mp3", "m"); break;
        
        
                // Black keys
                case "1": keyPressed("../Sounds/piano/Db3.mp3", "1"); break;
                case "2": keyPressed("../Sounds/piano/Eb3.mp3", "2"); break;
                case "3": keyPressed("../Sounds/piano/Gb3.mp3", "3"); break;
                case "4": keyPressed("../Sounds/piano/Ab3.mp3", "4"); break;
                case "5": keyPressed("../Sounds/piano/Bb3.mp3", "5"); break;
        
                case "6": keyPressed("../Sounds/piano/Db4.mp3", "6"); break;
                case "7": keyPressed("../Sounds/piano/Eb4.mp3", "7"); break;
                case "8": keyPressed("../Sounds/piano/Gb4.mp3", "8"); break;
                case "9": keyPressed("../Sounds/piano/Ab4.mp3", "9"); break;
                case "0": keyPressed("../Sounds/piano/Bb4.mp3", "0"); break;
        
                case "-": keyPressed("../Sounds/piano/Db5.mp3", "-"); break;
                case "=": keyPressed("../Sounds/piano/Eb5.mp3", "="); break;
                case "Backspace": keyPressed("../Sounds/piano/Gb5.mp3", "backspace"); break;
                case "]": keyPressed("../Sounds/piano/Ab5.mp3", "]"); break;
                case "#": keyPressed("../Sounds/piano/Bb5.mp3", "#"); break;
            }
            break;

            case 'Strings':
                switch (name) {
                    case "q": keyPressed("../Sounds/strings/C3s.mp3", "q"); break;
                    case "w": keyPressed("../Sounds/strings/D3s.mp3", "w"); break;
                    case "e": keyPressed("../Sounds/strings/E3s.mp3", "e"); break;
                    case "r": keyPressed("../Sounds/strings/F3s.mp3", "r"); break;
                    case "t": keyPressed("../Sounds/strings/G3s.mp3", "t"); break;
                    case "y": keyPressed("../Sounds/strings/A3s.mp3", "y"); break;
                    case "u": keyPressed("../Sounds/strings/B3s.mp3", "u"); break;
            
                    case "a": keyPressed("../Sounds/strings/C4s.mp3", "a"); break;
                    case "s": keyPressed("../Sounds/strings/D4s.mp3", "s"); break;
                    case "d": keyPressed("../Sounds/strings/E4s.mp3", "d"); break;
                    case "f": keyPressed("../Sounds/strings/F4s.mp3", "f"); break;
                    case "g": keyPressed("../Sounds/strings/G4s.mp3", "g"); break;
                    case "h": keyPressed("../Sounds/strings/A4s.mp3", "h"); break;
                    case "j": keyPressed("../Sounds/strings/B4s.mp3", "j"); break;
            
                    case "z": keyPressed("../Sounds/strings/C5s.mp3", "z"); break;
                    case "x": keyPressed("../Sounds/strings/D5s.mp3", "x"); break;
                    case "c": keyPressed("../Sounds/strings/E5s.mp3", "c"); break;
                    case "v": keyPressed("../Sounds/strings/F5s.mp3", "v"); break;
                    case "b": keyPressed("../Sounds/strings/G5s.mp3", "b"); break;
                    case "n": keyPressed("../Sounds/strings/A5s.mp3", "n"); break;
                    case "m": keyPressed("../Sounds/strings/B5s.mp3", "m"); break;
            
            
                    // Black keys
                    case "1": keyPressed("../Sounds/strings/Db3s.mp3", "1"); break;
                    case "2": keyPressed("../Sounds/strings/Eb3s.mp3", "2"); break;
                    case "3": keyPressed("../Sounds/strings/Gb3s.mp3", "3"); break;
                    case "4": keyPressed("../Sounds/strings/Ab3s.mp3", "4"); break;
                    case "5": keyPressed("../Sounds/strings/Bb3s.mp3", "5"); break;
            
                    case "6": keyPressed("../Sounds/strings/Db4s.mp3", "6"); break;
                    case "7": keyPressed("../Sounds/strings/Eb4s.mp3", "7"); break;
                    case "8": keyPressed("../Sounds/strings/Gb4s.mp3", "8"); break;
                    case "9": keyPressed("../Sounds/strings/Ab4s.mp3", "9"); break;
                    case "0": keyPressed("../Sounds/strings/Bb4s.mp3", "0"); break;
            
                    case "-": keyPressed("../Sounds/strings/Db5s.mp3", "-"); break;
                    case "=": keyPressed("../Sounds/strings/Eb5s.mp3", "="); break;
                    case "Backspace": keyPressed("../Sounds/strings/Gb5s.mp3", "backspace"); break;
                    case "]": keyPressed("../Sounds/strings/Ab5s.mp3", "]"); break;
                    case "#": keyPressed("../Sounds/strings/Bb5s.mp3", "#"); break;
                }
                break;

                case 'Harp':
            switch (name) {
                case "q": keyPressed("../Sounds/harp/C3h.mp3", "q"); break;
                case "w": keyPressed("../Sounds/harp/D3h.mp3", "w"); break;
                case "e": keyPressed("../Sounds/harp/E3h.mp3", "e"); break;
                case "r": keyPressed("../Sounds/harp/F3h.mp3", "r"); break;
                case "t": keyPressed("../Sounds/harp/G3h.mp3", "t"); break;
                case "y": keyPressed("../Sounds/harp/A3h.mp3", "y"); break;
                case "u": keyPressed("../Sounds/harp/B3h.mp3", "u"); break;
        
                case "a": keyPressed("../Sounds/harp/C4h.mp3", "a"); break;
                case "s": keyPressed("../Sounds/harp/D4h.mp3", "s"); break;
                case "d": keyPressed("../Sounds/harp/E4h.mp3", "d"); break;
                case "f": keyPressed("../Sounds/harp/F4h.mp3", "f"); break;
                case "g": keyPressed("../Sounds/harp/G4h.mp3", "g"); break;
                case "h": keyPressed("../Sounds/harp/A4h.mp3", "h"); break;
                case "j": keyPressed("../Sounds/harp/B4h.mp3", "j"); break;
        
                case "z": keyPressed("../Sounds/harp/C5h.mp3", "z"); break;
                case "x": keyPressed("../Sounds/harp/D5h.mp3", "x"); break;
                case "c": keyPressed("../Sounds/harp/E5h.mp3", "c"); break;
                case "v": keyPressed("../Sounds/harp/F5h.mp3", "v"); break;
                case "b": keyPressed("../Sounds/harp/G5h.mp3", "b"); break;
                case "n": keyPressed("../Sounds/harp/A5h.mp3", "n"); break;
                case "m": keyPressed("../Sounds/harp/B5h.mp3", "m"); break;
        
        
                // Black keys
                case "1": keyPressed("../Sounds/harp/Db3h.mp3", "1"); break;
                case "2": keyPressed("../Sounds/harp/Eb3h.mp3", "2"); break;
                case "3": keyPressed("../Sounds/harp/Gb3h.mp3", "3"); break;
                case "4": keyPressed("../Sounds/harp/Ab3h.mp3", "4"); break;
                case "5": keyPressed("../Sounds/harp/Bb3h.mp3", "5"); break;
        
                case "6": keyPressed("../Sounds/harp/Db4h.mp3", "6"); break;
                case "7": keyPressed("../Sounds/harp/Eb4h.mp3", "7"); break;
                case "8": keyPressed("../Sounds/harp/Gb4h.mp3", "8"); break;
                case "9": keyPressed("../Sounds/harp/Ab4h.mp3", "9"); break;
                case "0": keyPressed("../Sounds/harp/Bb4h.mp3", "0"); break;
        
                case "-": keyPressed("../Sounds/harp/Db5h.mp3", "-"); break;
                case "=": keyPressed("../Sounds/harp/Eb5h.mp3", "="); break;
                case "Backspace": keyPressed("../Sounds/harp/Gb5h.mp3", "backspace"); break;
                case "]": keyPressed("../Sounds/harp/Ab5h.mp3", "]"); break;
                case "#": keyPressed("../Sounds/harp/Bb5h.mp3", "#"); break;
            }
            break;

            case 'Glockenspiel':
            switch (name) {
                case "q": keyPressed("../Sounds/glockenspiel/C3g.mp3", "q"); break;
                case "w": keyPressed("../Sounds/glockenspiel/D3g.mp3", "w"); break;
                case "e": keyPressed("../Sounds/glockenspiel/E3g.mp3", "e"); break;
                case "r": keyPressed("../Sounds/glockenspiel/F3g.mp3", "r"); break;
                case "t": keyPressed("../Sounds/glockenspiel/G3g.mp3", "t"); break;
                case "y": keyPressed("../Sounds/glockenspiel/A3g.mp3", "y"); break;
                case "u": keyPressed("../Sounds/glockenspiel/B3g.mp3", "u"); break;
        
                case "a": keyPressed("../Sounds/glockenspiel/C4g.mp3", "a"); break;
                case "s": keyPressed("../Sounds/glockenspiel/D4g.mp3", "s"); break;
                case "d": keyPressed("../Sounds/glockenspiel/E4g.mp3", "d"); break;
                case "f": keyPressed("../Sounds/glockenspiel/F4g.mp3", "f"); break;
                case "g": keyPressed("../Sounds/glockenspiel/G4g.mp3", "g"); break;
                case "h": keyPressed("../Sounds/glockenspiel/A4g.mp3", "h"); break;
                case "j": keyPressed("../Sounds/glockenspiel/B4g.mp3", "j"); break;
        
                case "z": keyPressed("../Sounds/glockenspiel/C5g.mp3", "z"); break;
                case "x": keyPressed("../Sounds/glockenspiel/D5g.mp3", "x"); break;
                case "c": keyPressed("../Sounds/glockenspiel/E5g.mp3", "c"); break;
                case "v": keyPressed("../Sounds/glockenspiel/F5g.mp3", "v"); break;
                case "b": keyPressed("../Sounds/glockenspiel/G5g.mp3", "b"); break;
                case "n": keyPressed("../Sounds/glockenspiel/A5g.mp3", "n"); break;
                case "m": keyPressed("../Sounds/glockenspiel/B5g.mp3", "m"); break;
        
        
                // Black keys
                case "1": keyPressed("../Sounds/glockenspiel/Db3g.mp3", "1"); break;
                case "2": keyPressed("../Sounds/glockenspiel/Eb3g.mp3", "2"); break;
                case "3": keyPressed("../Sounds/glockenspiel/Gb3g.mp3", "3"); break;
                case "4": keyPressed("../Sounds/glockenspiel/Ab3g.mp3", "4"); break;
                case "5": keyPressed("../Sounds/glockenspiel/Bb3g.mp3", "5"); break;
        
                case "6": keyPressed("../Sounds/glockenspiel/Db4g.mp3", "6"); break;
                case "7": keyPressed("../Sounds/glockenspiel/Eb4g.mp3", "7"); break;
                case "8": keyPressed("../Sounds/glockenspiel/Gb4g.mp3", "8"); break;
                case "9": keyPressed("../Sounds/glockenspiel/Ab4g.mp3", "9"); break;
                case "0": keyPressed("../Sounds/glockenspiel/Bb4g.mp3", "0"); break;
        
                case "-": keyPressed("../Sounds/glockenspiel/Db5g.mp3", "-"); break;
                case "=": keyPressed("../Sounds/glockenspiel/Eb5g.mp3", "="); break;
                case "Backspace": keyPressed("../Sounds/glockenspiel/Gb5g.mp3", "backspace"); break;
                case "]": keyPressed("../Sounds/glockenspiel/Ab5g.mp3", "]"); break;
                case "#": keyPressed("../Sounds/glockenspiel/Bb5g.mp3", "#"); break;
            }
            break;

                default:
                    console.log('get fucked');
    }

    console.log(pressedKeys) // Print list of pressed keys
    let text = pressedKeys.toString();
    document.getElementById("noteList").innerText = text; // List everything pressed so far

    if(guideStarted === true) { // Update list display if user started a guide
        document.getElementById("toPressList").innerHTML = keysToPress; // List keys user needs to press to finish tutorial
        highlightGuideKey(name)
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

// Highlight the key to press for the guide
function highlightGuideKey(){
    var requiredKey = keysToPress[0].match(/\((.*)\)/); // Get key
    requiredKey = requiredKey[1];
    console.log("Key to Press[0]:   " + keysToPress[0]);
    console.log("Required Key:   " + requiredKey);

    let numKey = getKeyFromBlackKey(requiredKey);
    console.log("Highlight guide key. numKey is: " + numKey)
    document.getElementById(requiredKey).style.background = '#6d64ef';

}

function changeKeyColor(name){
    let numKey = getKeyFromBlackKey(name)

    if(numKey){ // If numKey is true, black key was pressed
        document.getElementById(name).style.background = '#4f4f4f'; // Change color while key down
        removeGuideDisplayKey()
        document.addEventListener('keyup', (event) => { // Add event listener for keyup
            if(event.key === name) {
                document.getElementById(name).style.background = '#270349FF'; // Change key color back to black when key up
                highlightGuideKey() // Highlight Next key in Guide
            }
        });

    } else { // white key was pressed
        document.getElementById(name).style.background = '#dedede'; // Change color while key down
        removeGuideDisplayKey()
        document.addEventListener('keyup', (event) => { // Add event listener for keyup
            if(event.key === name) {
                document.getElementById(name).style.background = '#ffffff'; // Change key color back to white when key up
                highlightGuideKey() // Highlight Next key in Guide
            }
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

    // Reset key colors - remove highlighting
    const white = document.querySelectorAll('.white');
    const black = document.querySelectorAll('.blackKey');

    white.forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });

    black.forEach(box => {
        box.style.backgroundColor = '#270349FF';
    });

    // Display full list of keys
    document.getElementById('SongKeys').innerHTML =
        `<div>
            <p id="guideList"></p>
        </div>`
    // Display list of keys to press next
    document.getElementById('NextGuideKeys').innerHTML =
        `<div>
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

        // Arpeggios
        case 'C major arp':
            guideKeys = ['C(a)','E(d)','G(g)','C(z)']; // Set keys
            updateDisplay(); // Update display on
            break;
        case 'C minor arp':
            guideKeys = ['C(a)','Eb(7)','G(g)','C(z)'];
            updateDisplay();
            break;
        case 'D major arp':
            guideKeys = ['D(s)','F#(8)','A(h)','D(x)'];
            updateDisplay();
            break;
        case 'D minor arp':
            guideKeys = ['D(s)','F(f)','A(h)','D(x)'];
            updateDisplay();
            break;
        case 'E major arp':
            guideKeys = ['E(d)','G#(9)','B(j)','E(c)'];
            updateDisplay();
            break;
        case 'E minor arp':
            guideKeys = ['E(d)','G(g)','B(j)','E(c)'];
            updateDisplay();
            break;
        case 'F major arp':
            guideKeys = ['F(f)','A(h)','C(z)','F(v)'];
            updateDisplay();
            break;
        case 'F minor arp':
            guideKeys = ['F(f)','Ab(9)','C(z)','F(v)'];
            updateDisplay();
            break;
        case 'G major arp':
            guideKeys = ['G(g)','B(j)','D(x)','G(b)'];
            updateDisplay();
            break;
        case 'G minor arp':
            guideKeys = ['G(g)','Bb(0)','D(x)','G(b)'];
            updateDisplay();
            break;
        case 'A major arp':
            guideKeys = ['A(y)','C#(6)','E(d)','A(h)'];
            updateDisplay();
            break;
        case 'A minor arp':
            guideKeys = ['A(y)','C(a)','E(d)','A(h)'];
            updateDisplay();
            break;
        case 'B major arp':
            guideKeys = ['B(u)','D#(7)','F#(8)','B(j)'];
            updateDisplay();
            break;
        case 'B minor arp':
            guideKeys = ['B(u)','D(s)','F#(8)','B(j)'];
            updateDisplay();
            break;

        //Song
        case 'Do-Re-Mi':
            guideKeys = ['C(a)','D(s)','E(d)','C(a)','E(d)','C(a)','E(d)','D(s)','E(d)','F(f)','F(f)','E(d)','D(s)','F(f)','E(d)','F(f)','G(g)','E(d)','G(g)','E(d)','G(g)','F(f)','G(g)','A(h)','A(h)','G(g)','F(f)','A(h)','G(g)','C(a)','D(s)','E(d)','F(f)','G(g)','A(h)','A(h)','D(s)','E(d)','F#(8)','G(g)','A(h)','B(j)','B(j)','E(d)','F#(8)','G#(9)','A(h)','B(j)','C(z)','C(z)','B(j)','A(h)','F(f)','B(j)','G(g)','C(z)','G(g)','E(d)','D(s)','C(a)'];
            updateDisplay();
            break;
        case 'Twinkle Twinkle Little Star':
            guideKeys = ['C(a)','C(a)','G(g)','G(g)','A(h)','A(h)','G(g)','F(f)','F(f)','E(d)','E(d)','D(s)','D(s)','C(a)','G(g),','G(g)','F(f)','F(f)','E(d)','E(d)','D(s)','G(g),','G(g)','F(f)','F(f)','E(d)','E(d)','D(s)','C(a)','C(a)','G(g)','G(g)','A(h)','A(h)','G(g)','F(f)','F(f)','E(d)','E(d)','D(s)','D(s)','C(a)'];
            updateDisplay();
            break;
        case 'Nokia Theme':
            guideKeys = ['E(c)','D(x)','F#(8)','G#(9)','C#(-)','B(j)','D(s)','E(d)','B(j)','A(h)','C#(6)','E(d)','A(h)'];
            updateDisplay();
            break;
        case 'Pink Panther Theme':
            guideKeys = ['C#(1)','D(w)','D#(2)','E(e)','C#(1)','D(w)','D#(2)','E(e)','D#(7)','E(d)','F#(8)','G(g)','D#(7)','E(d)','F#(8)','G(g)','C(z)','B(j)','E(d)','G(g)','B(j)','A#(0)','A(h)','G(g)','E(d)','D(s)','E(d)','D#(7)','E(d)','F#(8)','G(g)','D#(7)','E(d)','F#(8)','G(g)','C(z)','B(j)','G(g)','B(j)','E(c)','D#(=)','D#(7)','E(d)','F#(8)','G(g)','D#(7)','E(d)','F#(8)','G(g)','C(z)','B(j)','E(d)','G(g)','B(j)','A#(0)','A(h)','G(g)','E(d)','D(s)','E(d)','E(c)','D(x)','B(j)','A(h)','G(g)','E(d)','A#(0)','A(h)','A#(0)','A(h)','A#(0)','A(h)','A#(0)','A(h)','G(g)','E(d)','D(s)','E(d)','E(c)'];
            updateDisplay();
            break;
        case 'Jingle Bells':
            guideKeys = ['E(d)','E(d)','E(d)','E(d)','E(d)','E(d)','E(d)','G(g)','C(a)','D(s)','E(d)','F(f)','F(f)','F(f)','F(f)','F(f)','E(d)','E(d)','E(d)','E(d)','E(d)','D(s)','D(s)','E(d)','D(s)','G(g)','E(d)','E(d)','E(d)','E(d)','E(d)','E(d)','E(d)','G(g)','C(a)','D(s)','E(d)','F(f)','F(f)','F(f)','F(f)','F(f)','E(d)','E(d)','E(d)','E(d)','G(g)','G(g)','F(f)','D(s)','C(a)','G(t)','E(d)','D(s)','C(a)','G(t)','G(t)','G(t)','G(t)','E(d)','D(s)','C(a)','A(y)','A(y)','F(f)','E(d)','D(s)','B(u)','G(g)','G(g)','F(f)','D(s)','E(d)','G(t)','E(d)','D(s)','C(a)','G(t)','G(t)','E(d)','D(s)','C(a)','A(y)','A(y)','A(y)','F(f)','E(d)','D(s)','G(g)','G(g)','G(g)','G(g)','A(h)','G(g)','F(f)','D(s)','C(a)'];
            updateDisplay();
            break;
        case 'Heart and Soul':
            guideKeys = ['C(a)','C(a)','C(a)','C(a)','B(u)','A(y)','B(u)','C(a)','D(s)','E(d)','E(d)','E(d)','E(d)','D(s)','C(a)','D(s)','E(d)','F(f)','G(g)','C(a)','A(h)','G(g)','F(f)','E(d)','D(s)','C(a)','C(z)','B(j)','A(h)','B(j)','A(h)','G(g)','F(f)','G(g)','F(f)','E(d)','D(s)','G(g)','C(a)'];
            updateDisplay();
            break;
        case "close":
            document.getElementById('SongKeys').innerHTML = "";
            document.getElementById('NextGuideKeys').innerHTML = "";
            guideStarted = false;
            break;

        default:
            break;
    }
    function updateDisplay(){
        guideStarted = true;
        keysToPress = guideKeys; // Set keysToPress array as list of guide keys -> show user what keys they need to press
        highlightGuideKey();
        document.getElementById("ControlButtons").innerHTML =
            `<button class="btn btn-primary" type="button" onclick="guideControl('close')" style="margin-right: 10px;">End Guide</button>`
        document.getElementById("guideList").innerHTML = guideKeys; // Display guide keys -> all keys for song
        document.getElementById("toPressList").innerHTML = keysToPress; // Display keys user needs to press
    }
}

function soundControl(noise){
    kbsound = noise;
}

function getKeyFromBlackKey(name){
    let blackKey = "";

    switch (name) {
        case "1": return true;
        case "2": return true;
        case "3": return true;
        case "4": return true;
        case "5": return true;
        case "6": return true;
        case "7": return true;
        case "8": return true;
        case "9": return true;
        case "0": return true;
        case "-": return true;
        case "=": return true;
        case "backspace": return true;
        case "]": return true;
        case "#": return true;
        default: break;
    }

    return false;
}
