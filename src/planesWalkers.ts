import { PlanesWalkerType } from './@types/PlanesWalker';
import ajani from './assets/imgs/ajani.jpg';
import ajanimini from './assets/imgs/ajanimini.png';

import chandra from './assets/imgs/chandra.jpg';
import chandramini from './assets/imgs/chandramini.png';

import elspeth from './assets/imgs/elspeth.jpg';
import elspethmini from './assets/imgs/elspethmini.png';

import garruk from './assets/imgs/garruk.jpg';
import garrukmini from './assets/imgs/garrukmini.png';

import jace from './assets/imgs/jace.jpg';
import jacemini from './assets/imgs/jacemini.png';

import leliana from './assets/imgs/leliana.jpg';
import lelianamini from './assets/imgs/lelianamini.png';

import nissa from './assets/imgs/nissa.jpg';
import nissamini from './assets/imgs/nissamini.png';

import sarkhan from './assets/imgs/sarkhan.jpg';
import sarkhanmini from './assets/imgs/sarkhanmini.png';

import sorin from './assets/imgs/sorin.jpg';
import sorinmini from './assets/imgs/sorinmini.jpg';

import tefari from './assets/imgs/tefari.jpg';
import tefarimini from './assets/imgs/tefarimini.jpg';

const planesWalkers: {
    [key: string]: {
        mini: string;
        bg: string;
        color: string;
        name: string;
    }
} = {
    ajani:{
        mini: ajanimini,
        bg: ajani,
        color: "#FBF9C5",
        name: 'ajani'
    },
    chandra: {
        mini: chandramini,
        bg: chandra,
        color: "#E3170A",
        name: 'chandra'
    },
    sarkhan: {
        mini: sarkhanmini,
        bg: sarkhan,
        color: "#E3170A",
        name: 'sarkhan'
    },
    elspeth: {
        mini: elspethmini,
        bg: elspeth,
        color: "#FBF9C5",
        name: 'espeth',
    },
    garruk: {
        mini: garrukmini,
        bg: garruk,
        color: "#436436",
        name: 'garruk',
    },
    jace: {
        mini: jacemini,
        bg: jace,
        color: "#26408B",
        name: 'jace',
    },
    tefari: {
        mini: tefarimini,
        bg: tefari,
        color: "#26408B",
        name: 'tefari',
    },
    leliana: {
        mini: lelianamini,
        bg: leliana,
        color: "#735050",
        name: 'leliana'
    },
    sorin: {
        mini: sorinmini,
        bg: sorin,
        color: "#735050",
        name: 'sorin',
    },
    nissa: {
        mini: nissamini,
        bg: nissa,
        color: "#436436",
        name: 'nissa',
    },
}

export default planesWalkers;