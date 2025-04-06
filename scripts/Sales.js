export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesDivs = sales.map((sale) => {

        const totalPrice = (sale.entree.price + sale.vegetable.price + sale.side.price).toLocaleString("en-US", { style: "currency", currency: "USD" });

        return `
        <div class="order">
            <ul><strong>Receipt #${sale.id} = ${totalPrice}</strong></ul>
        </div>`
    }).join("");

    return salesDivs;
}