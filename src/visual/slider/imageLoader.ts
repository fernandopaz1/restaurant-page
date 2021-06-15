const imageLoader = (number: number): HTMLElement => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("slide");
    if (number === 1) {
        imageDiv.classList.add("first");
    }

    const imageElement = document.createElement("img");
    imageElement.src = "./static/slider" + number + ".jpg";

    imageDiv.appendChild(imageElement);
    return imageDiv;
};

export default imageLoader;