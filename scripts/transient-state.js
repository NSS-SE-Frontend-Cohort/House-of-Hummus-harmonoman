const transientState = {
    
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const SetEntree = (entreeSelection) => {
    transientState.entreeId = entreeSelection;
}

export const SetVegetable = (vegetableSelection) => {
    transientState.vegetableId = vegetableSelection;
}

export const SetSide = (sideSelection) => {
    transientState.sideId = sideSelection;
}

const ResetTransientState = () => {
    transientState.entreeId = 0;
    transientState.vegetableId = 0;
    transientState.sideId = 0;
}

export const PlaceOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:  JSON.stringify(transientState)
    }

    const  response = await fetch("http://localhost:8088/purchases", postOptions);

    ResetTransientState();

    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}