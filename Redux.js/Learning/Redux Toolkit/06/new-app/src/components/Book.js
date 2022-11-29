import React from 'react';
import  {buyBook} from "../redux/Reducers";
import { connect } from 'react-redux';

function Book(props) {
  return (
    <div>
      <h1>Number of Books:- {props.numberOfBooks}</h1>
      <button onClick={props.buyBook}>Buy Book!</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    numberOfBooks: state.numberOfBooks
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      buyBook: function(){
        dispatch(buyBook());
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Book);