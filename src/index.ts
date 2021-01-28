import './styles/styles.sass';
import './static/openSourceLogo.png';

import menu from "./menu";
import slider from "./slider";

document.querySelector("div#content").appendChild(menu());


document.querySelector("div#content").appendChild(slider());
