import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyBook} from '../redux/Actions/Actions';

export function HookBook() {
    const myState = useSelector(state=> state.numberOfBooks);
    const dispatch = useDispatch();

  return (
    <React.Fragment>
        <h1>Hook Container</h1>
        <br />
        <h2>Number of Books:- {myState}</h2>
        <button onClick={()=> dispatch(buyBook())}>Buy Book</button>
    </React.Fragment>
  )
}