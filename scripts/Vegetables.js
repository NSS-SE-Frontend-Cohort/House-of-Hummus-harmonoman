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
