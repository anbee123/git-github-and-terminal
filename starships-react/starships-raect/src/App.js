import Header from './Header';
import StarshipDisplay from './StarshipDisplay';
import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [starships, setStarships] = useState([])
  




  return (
    <div className="App">
    < Header />
    <StarshipDisplay /> 
    </div>
  );
}

export default App;
