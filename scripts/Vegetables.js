import { SetVegetable } from "./transient-state.js";

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json();

    let optionsHTML = "<h2>Vegetables</h2>"

    const divStringArray = vegetables.map((vegetable) => {
        return `
        <div>
            <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
        </div>`;
    })

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}

export const handleVegetableChoice = (event) => {
    if(event.target.name === "vegetable") {
        SetVegetable(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleVegetableChoice);