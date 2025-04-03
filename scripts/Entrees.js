export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json();

    let optionsHTML = `<h2>Entrees</h2>`;

    const divStringArray = entrees.map((entree) => {
        return `
        <div>
            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </div>`;
    })

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}