const divs = document.querySelectorAll('div');
const WIKIPEDIA_FR_BASE_URL = 'https://fr.wikipedia.org/wiki/';
const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
};

const changeBackgroundColor = (element, color) => {
    element.style.backgroundColor = color;
};


const getBackgroundColor = (element) => {
    return getComputedStyle(element).getPropertyValue('background-color');
};

const extractRGBValues = (colorString) => {
    const rgbValues = colorString.match(/\d+/g);
    return {
        red: parseInt(rgbValues[0]),
        green: parseInt(rgbValues[1]),
        blue: parseInt(rgbValues[2])
    };
};

const getDominantColor = ({ red, green, blue }) => {
    if (red > green && red > blue) {
        return COLORS.RED;
    }
    if (green > red && green > blue) {
        return COLORS.GREEN;
    }
    return COLORS.BLUE;
};

const handleDivClick = (div) => {
    const currentBackgroundColor = getBackgroundColor(div);
    const rgbValues = extractRGBValues(currentBackgroundColor);
    const dominantColor = getDominantColor(rgbValues);

    changeBackgroundColor(div, dominantColor);
    window.open(`${WIKIPEDIA_FR_BASE_URL}${dominantColor}`);
};

divs.forEach(div => {
    div.addEventListener('click', () => handleDivClick(div));
});