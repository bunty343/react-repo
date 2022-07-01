import { BUY_PIZZA, RETURN_PIZZA,RESET_PIZZA } from "./pizzaTypes";
// Action creator
export const buyPizza = () => {
return {
type: "BUY_PIZZA" 
}
}

export const returnPizza = () => {
    return {
        type: RETURN_PIZZA
    }
}
export const resetPizza = () => {
    return {
        type: RESET_PIZZA
    }
}