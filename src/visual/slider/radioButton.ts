const radioButton = (id: string): HTMLElement => {

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio-btn";
    radio.id = id;

    return radio;
};

export default radioButton;
