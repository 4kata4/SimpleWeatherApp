import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapContainer from './Components/Map';
import Coords from './Components/MapConditions';
function App() {
  return (
    <div className="App">
    <h1>React Weather App</h1>
    <main>
      <Forecast />
    </main>
    </div>
  );
}

export default App;
