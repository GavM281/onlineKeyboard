//SPARKLES SCRIPT
let SPARKLE_TIMER; //SPARKLES!!!!!!!
const SPARKLE_CONTAINER = document.querySelector(".sparksContained");
//Sparkle duration on the screen(After pressing a key)
const sparkleDuration = 5;
//Density of the sparkles on the screen.
const sparkleDensity = 6000;
//Min and max sizes of the sparkles diplayed on the scren.
const minSize = 1.8;

const maxSize = 2.8;

let playEffects = false;

//Random between the min and max.
const randomBetween = (min, max) => Math.random() * (max - min) + min;

const invertRange = (number, min, max) => -number + (min + max);
//Containing the sparkles
const unmountSparkles = () => (SPARKLE_CONTAINER.innerHTML = " ");
//Releasing the sparkles
//Sparkles will disappear after the duration.
const mountSparkles = sparkleElement => {
    if(playEffects) {
        window.clearTimeout(SPARKLE_TIMER);
        SPARKLE_CONTAINER.innerHTML = sparkleElement;
        SPARKLE_TIMER = window.setTimeout(
            unmountSparkles,
            sparkleDuration * 1000
        );
    }
};

const generateRandomSparklePath = containerDimensions => {
    // sparkles begin a bit outside the cotainer to give it an unpredictable parttern.
    const verticalStartOffset = 30;
    const scaleStart = randomBetween(minSize, maxSize);
    const x = randomBetween(0, containerDimensions.width);
    const yStart =
        randomBetween(0, containerDimensions.height) - verticalStartOffset;

    //The sizes of the sparkles determine how fast it will fall on the screen.
    const animationDurationMultiplier = invertRange(
        scaleStart,
        minSize,
        maxSize
    );
    const yEndMultiplier = 40;
    const yEnd = yStart + scaleStart * yEndMultiplier;
    const animationDuration = randomBetween(
        animationDurationMultiplier,
        sparkleDuration
    );

    return generateSparklePath({
        positionStart: [x, yStart],
        positionEnd: [x, yEnd],
        scaleStart: scaleStart,
        scaleEnd: 0,
        rotateStart: randomBetween(0, 45),
        rotateEnd: randomBetween(90, 360),
        hue: randomBetween(0, 360),
        animationDuration: animationDuration
    });
};

//Generate random sparkles within the svg.
const generateSparklesSVG = () => {
    const containerDimensions = SPARKLE_CONTAINER.getBoundingClientRect();
    const containerArea =
        containerDimensions.width * containerDimensions.height;
    const sparkleCount = Math.round(containerArea / sparkleDensity);
    const emptySparkleArray = new Array(sparkleCount).fill(0);

    //Random will be mapped randomly within the containers dimesions.
    const randomSparklePathElements = emptySparkleArray
        .map(() => generateRandomSparklePath(containerDimensions))
        .join("");

    return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${randomSparklePathElements}</svg>`;
};

//Display the sparkles on the screen.
function toggleEffects(){
    if(playEffects) {
        playEffects = false;
        document.getElementById("toggleEffects").innerText = "Toggle Effects On";
    }else{
        playEffects = true;
        document.getElementById("toggleEffects").innerText = "Toggle Effects Off";
    }
}

const renderSparkles = () => mountSparkles(generateSparklesSVG());

/*if(guideStarted === true) { // Update list display if user started a guide
    document.addEventListener("toPressList", renderSparkles);// List keys user needs to press to finish tutorial
}Might use this */
//Currently set to keypress so any key on the laptop keyboard. Not on the piano keys.
document.addEventListener("keypress", renderSparkles);

/*How the sparkles displayed on the screen will be postioned and fall at the start to the end.
  How big the sparkle will be and how it will rotate is also determined here.
*/
const generateSparklePath = ({
                                 positionStart,
                                 positionEnd,
                                 scaleStart,
                                 scaleEnd,
                                 rotateStart,
                                 rotateEnd,
                                 hue,
                                 animationDuration
                             }) => {
    return `<path d="M5 0v4h4v1H5v4H4V5H0V4h4V0z" fillRule="evenodd" fill="hsla(0, 0%, 0%, 0)">
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="${positionStart[0]} ${positionStart[1]}"
          to="${positionEnd[0]} ${positionEnd[1]}"
          dur="${animationDuration}s"
          fill="freeze"
        />
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="scale"
          from="${scaleStart}"
          to="${scaleEnd}"
          dur="${animationDuration}s"
          additive="sum"
          fill="freeze"
        />
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="rotate"
          from="${rotateStart} 4 4"
          to="${rotateEnd} 4 4"
          dur="${animationDuration}s"
          additive="sum"
          fill="freeze"
        />
        <animate
          attributeType="CSS"
          attributeName="fill"
          from="hsla(${hue}, 100%, 50%, 0)"
          to="hsla(${hue}, 100%, 50%, 1)"
          dur="0.3s"
          fill="freeze"
        />
      </path>`;
};

setTimeout(function(){
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-body").classList.remove("hidden");
}, 3000);

//Creating the confetti effects after completeing the guide.
//this will link to the app.js file.
var confetti = {
	maxCount: 150,		
	speed: 2,			
	frameInterval: 15,	
	alpha: 1.0,			
	gradient: false,	
	start: null,	
	stop: null,			
	toggle: null,	
	pause: null,		
	resume: null,		
	togglePause: null,	
	remove: null,		
	isPaused: null,		
	isRunning: null		
};
//Fuction taking into account the start, stop, toggle etc of the confetti
//Colours aswell corresponding to the colout of the keyboard.
(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;
//Random reset the particles at different points in the confetti container.
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}
//Animating the falling particles.
	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}
//start of the confetti animation and falling through the confettiContainer 
	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confettiContained");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confettiContained");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		context.beginPath();
		context.lineWidth = particle.diameter;
		x2 = particle.x + particle.tilt;
		x = x2 + particle.diameter / 2;
		y2 = particle.y + particle.tilt + particle.diameter / 2;
		if (confetti.gradient) {
			var gradient = context.createLinearGradient(x, particle.y, x2, y2);
			gradient.addColorStop("0", particle.color);
			gradient.addColorStop("1.0", particle.color2);
			context.strokeStyle = gradient;
		} else
			context.strokeStyle = particle.color;
		context.moveTo(x, particle.y);
		context.lineTo(x2, y2);
		context.stroke();
		}
	}
//Update each particles randomly.
	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();
