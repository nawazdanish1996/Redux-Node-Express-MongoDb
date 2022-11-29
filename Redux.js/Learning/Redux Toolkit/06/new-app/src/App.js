import { Provider } from 'react-redux';
import './App.css';
import HookBook from './components/HookBook';
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HookBook />
      </Provider>
    </div>
  );
}

export default App;
