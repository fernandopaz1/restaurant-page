import radioButton from "./radioButton";
import imageLoader from "./imageLoader"
import navigationStart from "./navigationStart";

const slider = (): HTMLElement => {

    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add("slider");

    const slides = document.createElement("div");
    slides.classList.add("slides");

    sliderDiv.appelsndChild(slides);

    for (let i = 1; i <= 4; i++) {
        slides.appendChild(radioButton("radio" + i));
        slides.appendChild(imageLoader(i));
    }

    // slides.appendChild(navigationStart(4));

    return sliderDiv;
};

export default slider;
