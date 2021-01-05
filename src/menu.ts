import divButton from "./divButton";

const menu = (): HTMLElement => {
    const carta = divButton("Menu", () => {
        console.log("carta");
    });

    const acerca = divButton("Acerca", () => {
        console.log("acerca");
    });

    const element = document.createElement("div");
    element.appendChild(carta);
    element.appendChild(acerca);

    return element;
};

export default menu;
