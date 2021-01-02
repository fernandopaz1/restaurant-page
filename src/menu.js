import divButton from "./divButton";

const menu = () => {
    const element = divButton("Menu", (e) => {
        console.log("Menu");
    });

    const menu = document.createElement("div");
    menu.innerHTML = "Menu";
    element.appendChild(menu);

    return element;
};

export default menu;
