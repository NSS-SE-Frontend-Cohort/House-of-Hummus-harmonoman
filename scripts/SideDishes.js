import { setSide } from "./transient-state.js";

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json();

    let optionsHTML = `<h2>Side Dishes</h2>`;

    const divStringArray = sides.map((side) => {
        return `
        <div>
            <input type="radio" name="side" value="${side.id}" /> ${side.title}
        </div>`;
    })

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}

export const handleSidesChoice = (event) => {
    if(event.target.name === "side") {
        setSide(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleSidesChoice)