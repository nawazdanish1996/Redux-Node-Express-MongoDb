import BookReducer from "../Actions/Actions";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    book: BookReducer
})

export default rootReducer;