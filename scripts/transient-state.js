const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

const setEntree = (entreeSelection) => {
    entreeId(entreeSelection);
}

const setVegetable = (vegetableSelection) => {
    entreeId(vegetableSelection);
}

const setSide = (sideSelection) => {
    entreeId(sideSelection);
}

const resetTransientState = () => {
    transientState.entreeId = 0;
    transientState.vegetableId = 0;
    transientState.sideId = 0;
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:  JSON.stringify(transientState)
    }

    const  response = await fetch("http://localhost:8088/orders", postOptions);

    resetTransientState();

    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}