const transientState = {
    
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (entreeSelection) => {
    transientState.entreeId = entreeSelection;
}

export const setVegetable = (vegetableSelection) => {
    transientState.vegetableId = vegetableSelection;
}

export const setSide = (sideSelection) => {
    transientState.sideId = sideSelection;
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

    const  response = await fetch("http://localhost:8088/purchases", postOptions);

    resetTransientState();
}