const divButton = (text: string, action: Function): HTMLElement => {
    const element = document.createElement("div");
    element.className = "divButton";

    element.innerHTML = text;

    element.addEventListener("click", () => {
        action();
    });
    return element;
};

export default divButton;
