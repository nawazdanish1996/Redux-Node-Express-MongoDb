// Redux Store
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreater = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Action
// Cakes in Stock
const Cake_Order = "Cake_Order";
const Cake_restocked = "Cake_restocked";
const IceCream_Ordered = "IceCream_Ordered";
const IceCream_Restocked = "IceCream_Restocked";

const OrderCake = ()=>{
    return{
        type: Cake_Order,
        qty: 1,
    }
}

// Cakes restocked
const RestockCake = (qty = 1)=>{
    return{
        type: Cake_restocked,
        payload: qty,
    }
}

// add new items
const OrderIceCream = (qty = 1)=>{
    return{
        type: IceCream_Ordered,
        payload: qty,
    }
}

const RestockIceCream = (qty = 1)=>{
    return{
        type: IceCream_Restocked,
        payload: qty,
    }
}

const initialState = {
    numOfCakes : 10,
    numOfIceCream: 10,
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
                numOfCakes: state.numOfCakes+action.payload,
            }

        case IceCream_Ordered:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream - 1,
            }
            break;
                
        case IceCream_Restocked:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream+action.payload,
            }
            break;

        default:
            return state
            break;
    }
}


// combine Reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// Redux Store
const store = createStore(rootReducer);
// Allow access to state via getState().
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=>
    console.log("Update Store", store.getState()
));
// bind Action creaters
const actions = bindActionCreater({OrderCake, RestockCake, OrderIceCream, RestockIceCream}, store.dispatch);
actions.OrderCake();
actions.OrderCake();
actions.RestockCake(5);

actions.OrderIceCream();
actions.OrderIceCream();
actions.RestockIceCream(5);
unsubscribe();