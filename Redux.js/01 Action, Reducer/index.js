// Action
const Cake_Order = "Cake_Order";

const OrderCake = ()=>{
    return{
        type: Cake_Order,
        qty: 1,
    }
}

const initialState = {
    numOfCakes : 10,
}

// Reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case Cake_Order:
            return{
                ...state,
                numOfCakes : state.Cake_Order-1,
            }
            break;
        default:
            return state
            break;
    }
}