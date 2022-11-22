// Redux Store
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreater = redux.bindActionCreators;

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

// bind Action creaters
const actions = bindActionCreater({OrderCake, RestockCake}, store.dispatch);
actions.OrderCake();
actions.OrderCake();
actions.OrderCake();
actions.RestockCake(5);
unsubscribe();