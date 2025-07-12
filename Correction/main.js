const divs = document.querySelectorAll('div');
const WIKIPEDIA_BASE_URL = 'https://en.wikipedia.org/wiki/';
const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
};

const changerCouleurFond = (element, color) => {
    element.style.backgroundColor = color;
};


const obtenirCouleurFond = (element) => {
    return getComputedStyle(element).getPropertyValue('background-color');
};

const extraireValeursRGB = (colorString) => {
    const valeursRGB = colorString.match(/\d+/g);
    return {
        red: parseInt(valeursRGB[0]),
        green: parseInt(valeursRGB[1]),
        blue: parseInt(valeursRGB[2])
    };
};

const determinerCouleurDominante = ({ red, green, blue }) => {
    if (red > green && red > blue) {
        return COLORS.RED;
    }
    if (green > red && green > blue) {
        return COLORS.GREEN;
    }
    return COLORS.BLUE;
};


divs.forEach(div => {
    div.addEventListener('click', () => {

        const couleurActuelle  = obtenirCouleurFond(div);
        const valeursRGB  = extraireValeursRGB(couleurActuelle);
        const couleurDominante  = determinerCouleurDominante(valeursRGB);

        changerCouleurFond(div, couleurDominante);
        window.open(`${WIKIPEDIA_BASE_URL}${couleurDominante}`);

    });
});
