import './styles/styles.sass';
import './static/openSourceLogo.png';
import './static/slider/slider1.jpg';
import './static/slider/slider2.jpg';
import './static/slider/slider3.jpg';
import './static/slider/slider4.jpg';

import menu from "./visual/menu/menu";
import slider from "./visual/slider/slider";

document.querySelector("div#content").appendChild(menu());


document.querySelector("div#content").appendChild(slider());
