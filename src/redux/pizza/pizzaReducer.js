import { BUY_PIZZA, RETURN_PIZZA, RESET_PIZZA } from "./pizzaTypes"
 
const intialState = {
    numOfPizza: 50,
}
const pizzaReducer = (state = intialState, action) => {
   switch (action.type){
case BUY_PIZZA:
    return {...state, numOfPizza: state.numOfPizza - 1 }
    // return { numOfPizza: 50, numOfPizza: 50 - 1}
    // return { numOfPizza: 49, numOfPizza: 48 }
   case RETURN_PIZZA:
       return {...state, numOfPizza: state.numOfPizza + 1 }

       case RESET_PIZZA:
           return {numOfPizza: 50}
 default:
       return state
   }
}

export deafult pizzaReducer