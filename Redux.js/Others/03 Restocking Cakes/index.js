// Redux Store
const redux = require("redux");
const createStore = redux.createStore;

// Action
// Cakes in Stock
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
// Cakes restocked
const Cake_restocked = "Cake_restocked";

const RestockCake = (qty)=>{
    return{
        type: Cake_restocked,
        quentity: qty,
    }
}

// Reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case Cake_Order:
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1,
            }
            break;
            
        case Cake_restocked:
            return{
                ...state,
                numOfCakes: state.numOfCakes+action.quentity,
            }

        default:
            return state
            break;
    }
}

// Redux Store
const store = createStore(reducer);
// Allow access to state via getState().
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=>
    console.log("Update Store", store.getState()
));

// Allow state to be updated via dispatch(Action)
store.dispatch(OrderCake());
store.dispatch(OrderCake());
store.dispatch(OrderCake());

store.dispatch(RestockCake(10));
unsubscribe();
console.log("I have no. of cakes in stock", store.getState());
