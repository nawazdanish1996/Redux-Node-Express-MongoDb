import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './Actions/Actions';

function App(props) {
  const myState = useSelector((state)=> state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Icrement & Decrement</h1>

        <button onClick={()=> dispatch(incNumber())}>Increment</button>
        <h1>{myState}</h1>
        <button onClick={()=> dispatch(decNumber())}>Decrement</button>
    </div>
  );
}

export default App;