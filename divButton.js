const divButton = (text, action) => {
    const element = document.createElement("div");
    element.className = "divButton";

    const content = document.createElement("div");
    content.innerHTML = text;
    element.appendChild(content);

    element.addEventListener((e) => {
        action();
    });
    return element;
};

export default divButton;
