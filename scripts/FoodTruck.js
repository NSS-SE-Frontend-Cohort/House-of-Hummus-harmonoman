import { Entrees } from "./Entrees.js";
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js";
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = Sales();
    const entreesHTML = await Entrees();
    const veggiesHTML = await Veggies();
    const sidesHTML = await Sides();

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="options">
                ${entreesHTML}
            </section>
            <section class="options">
                ${veggiesHTML}
            </section>
            <section class="options">
                ${sidesHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
