//SPARKLES SCRIPT
let SPARKLE_TIMER; //SPARKLES!!!!!!!
const SPARKLE_CONTAINER = document.querySelector(".sparksContained");
//Sparkle duration on the screen(After pressing a key)
const sparkleDuration = 5;
//Density of the sparkles on the screen.
const SPARKLE_COUNT_DIVISOR = 6000;
//Min and max sizes of the sparkles diplayed on the scren.
const minSize = 1.8;

const maxSize = 2.8;

//Random between the min and max.
const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const invertRange = (number, min, max) => -number + (min + max);
    //Containing the sparkles
    const unmountSparkles = () => (SPARKLE_CONTAINER.innerHTML = " ");
    //Releasing the sparkles 
    //Sparkles will disappear after the duration.
    const mountSparkles = sparkleElement => {
      window.clearTimeout(SPARKLE_TIMER);
      SPARKLE_CONTAINER.innerHTML = sparkleElement;
      SPARKLE_TIMER = window.setTimeout(
        unmountSparkles,
        sparkleDuration * 1000
      );
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
      const sparkleCount = Math.round(containerArea / SPARKLE_COUNT_DIVISOR);
      const emptySparkleArray = new Array(sparkleCount).fill(0);

      //Random will be mapped randomly within the containers dimesions.
      const randomSparklePathElements = emptySparkleArray
        .map(() => generateRandomSparklePath(containerDimensions))
        .join("");

      return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${randomSparklePathElements}</svg>`;
    };

    //Display the sparkles on the screen.
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
