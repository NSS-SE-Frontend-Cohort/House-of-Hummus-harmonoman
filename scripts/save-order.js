import { placeOrder } from "./transient-state.js";

export const handlePlaceOrderClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        await placeOrder();
    }
}

export const saveOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick); 
    return `<button id="purchase">Purchase Combo</button>`;
}