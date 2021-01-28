const navigationStart = (number: number): HTMLElement => {

    const startDiv = document.createElement("div");

    const autoStartDiv = document.createElement("div");
    autoStartDiv.classList.add("navigation-auto");

    const manualStartDiv = document.createElement("div");
    manualStartDiv.classList.add("navigation-manual");


    for (let i = 1; i <= number; i++) {
        let autoElement = document.querySelector("div");
        // autoElement.classList.add(`auto-btn${i}`);

        let manualElement = document.querySelector("label");

        // manualElement.classList.add(`manual-btn${i} `);

        autoStartDiv.appendChild(autoElement);
        manualStartDiv.appendChild(manualElement);
    }

    startDiv.appendChild(autoStartDiv);
    startDiv.appendChild(manualStartDiv);
    return startDiv;
}
export default navigationStart;