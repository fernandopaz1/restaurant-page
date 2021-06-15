import divButton from "./divButton";

const menu = (): HTMLElement => {

    const home = divButton("Home", () => {
        console.log("carta");
    });

    const carta = divButton("Menu", () => {
        console.log("carta");
    });

    const about = divButton("About Us", () => {
        console.log("acerca");
    });

    const reservations = divButton("Reservations", () => {
        console.log("carta");
    });

    const events = divButton("Events", () => {
        console.log("carta");
    });

    const contact = divButton("Contact", () => {
        console.log("carta");
    });
    const element = document.createElement("div");
    element.id = "menu";
    element.appendChild(home);
    element.appendChild(carta);
    element.appendChild(reservations);
    element.appendChild(events);
    element.appendChild(about);
    element.appendChild(contact)

    return element;
};

export default menu;
