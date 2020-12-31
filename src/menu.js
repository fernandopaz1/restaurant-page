const menu = () => {
    const element = document.createElement("div");
    element.className = "bar";

    const menu = document.createElement("div");
    menu.innerHTML = "Menu";
    element.appendChild(menu);

    return element;
};

export default menu;
