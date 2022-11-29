import { buyBook } from "../Actions";

const initialStateBook={
    numberOfBooks : 10
}
const BookReducer = (state = initialStateBook, action)=>{
    switch(action.type){
        case buyBook:
            return{
                ...state,
                numberOfBooks: state.numberOfBooks-1
            }
        default:
            return state;
    }
}


export default BookReducer;

