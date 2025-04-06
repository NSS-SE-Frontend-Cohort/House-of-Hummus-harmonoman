import { PlaceOrder } from "./transient-state.js";

export const handlePlaceOrderClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        await PlaceOrder();
    }
}

export const SaveOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick); 
    return `<button id="purchase">Purchase Combo</button>`;
}