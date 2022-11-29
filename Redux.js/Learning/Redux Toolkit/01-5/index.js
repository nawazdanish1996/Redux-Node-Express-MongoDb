const redux = require("redux");
const createStore = redux.createStore;


// action
const Buy_Book = "BUY_BOOK";
const ReStock_Book = "RE_STOCK_BOOK";
const Buy_Note_Book = "BUY_NOTE_BOOK";

const initialStateBook = {
    numberOfBooks: 10,
}

const initialStateNoteBook = {
    numberOfNoteBooks : 20
}

function buyBook (){
    return{
        type: Buy_Book
    }
}

const reStockBook=(qty=1)=>{
    return{
        type: ReStock_Book,
        payload: qty
    }
}

function buyNoteBook(){
    return{
        type: Buy_Note_Book
    }
}

// Reducer
// (prevState, action)=> newState
const ReducerBook = (state = initialStateBook, action)=>{
    switch(action.type){
        case "BUY_BOOK":
            return{
                ...state,
                numberOfBooks : state.numberOfBooks-1
            }
        case "RE_STOCK_BOOK":
            return{
                ...state,
                numberOfBooks: state.numberOfBooks+action.payload
            }
            default:
                return state;
            }
        }
        
const ReducerNoteBook = (state = initialStateNoteBook, action)=>{
    switch(action.type){
        case "BUY_NOTE_BOOK":
            return{
                ...state,
                numberOfNoteBooks: state.numberOfNoteBooks-1
            }
        default:
            return state;
    }
}

// store
const reducers = redux.combineReducers({
    book: ReducerBook,
    noteBook: ReducerNoteBook
})
const store = createStore(reducers);
// console.log("initial State value: ",store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state value: ", store.getState());
});

// store.dispatch(buyBook());
// store.dispatch(buyNoteBook());
store.dispatch(reStockBook(5));

unsubscribe();