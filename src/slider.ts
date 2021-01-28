import radioButton from "./radioButton";

const slider = (): HTMLElement => {

    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add("slider");

    const slides = document.createElement("div");
    slides.classList.add("slides");

    sliderDiv.appendChild(slides);

    slides.appendChild(radioButton("radio1"));
    slides.appendChild(radioButton("radio2"));
    slides.appendChild(radioButton("radio3"));
    slides.appendChild(radioButton("radio4"));


    return sliderDiv;
};

export default slider;
