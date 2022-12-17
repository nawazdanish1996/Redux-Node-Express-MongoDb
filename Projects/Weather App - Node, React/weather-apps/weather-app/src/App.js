import './App.css';
import Wapp from './components/Wapp';
// import Weather from './components/Weather';


//API: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api key: cac1df63174b02834fcf809d674b0def

//final: https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=cac1df63174b02834fcf809d674b0def


function App() {
  return (
    <div className="App">
      {/* <Weather /> */}
      <Wapp />
    </div>
  );
}

export default App;
