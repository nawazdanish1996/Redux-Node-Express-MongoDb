import './App.css';
import {connect} from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>React + Redux</h1>
      <h2>{props.user.id} : {props.user.name}</h2>

    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    user: state
  }
}
export default connect(mapStateToProps)(App);