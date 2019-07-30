var $body = document.querySelector('body');
const $beaultyText = document.querySelector('#beaulty-text');
const $happyBox = document.querySelector('.happy-box');
const $button = document.querySelector('#very-cool-button');
const $input = document.querySelector('#text-input');
const $inputDiv = document.querySelector('#curral');

var text = 'LOVE IS A LITTLE LIE THAT WE TRUST FOR MADNESS';

$button.addEventListener('click', showTime);

function showTime() {
    if (!!$input.value.toString())
        text = $input.value.toString();

    $beaultyText.innerText = text.toUpperCase();
    $inputDiv.hidden = true;
    $happyBox.hidden = false;

    makeHappyAndLove()
    makeItBeaultifullAndShine($beaultyText);
}

var makeItBeaultifullAndShine = (element) => {

    colors = {
        red: 255,
        green: 0,
        blue: 0
    };

    loopOfHapiness(element, colors)
}

var updateColors = (colors) => {

    var red = colors.red;
    var green = colors.green;
    var blue = colors.blue;

    if (green == 0)
        if (red <= 255 && red != 0 && blue <= 255) {
            red -= 5;
            blue += 5;
        }
    if (red == 0)
        if (blue <= 255 && blue != 0 && green <= 255) {
            blue -= 5;
            green += 5;
        }

    if (blue == 0)
        if (green <= 255 && green != 0 && red <= 255) {
            green -= 5;
            red += 5;
        }

    // console.log(`Vermelho: ${red}`)
    // console.log(`Azul: ${blue}`)
    // console.log(`Verde: ${green}`)
    // console.log(`rgb(${red},${green},${blue})`);

    return {
        red, green, blue
    }
}

var loopOfHapiness = (element, colors) => {
    setInterval(() => {
        // console.clear();
        colors = updateColors(colors);

        color = `rgb(${colors.red},${colors.green},${colors.blue})`;

        if (!!element)
            element.style.color = color;

    }, 10);
}

var makeHappyAndLove = () => {
    var index = 0;
    var backgrounds = [
        'fogos1.gif', 'fogos2.gif', 'fogos3.gif', 'sapao.gif', 'fogos5.gif'
    ];

    setInterval(() => {
        if (index > 4)
            index = 0;
        $body.style.backgroundImage = `url(images/${backgrounds[index]}`;
        index++;
    }, 2000);
}