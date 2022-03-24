import nav from './html/includes/nav.html';
import slider from './html/includes/slider.html';
import ticker from './html/includes/ticker.html';

const includes = [nav, slider, ticker];
document.getElementById('root').innerHTML = includes.join('');

import './scss/main.scss';

import './js/header.js';
import './js/slider.js';
import './js/ticker.js';
