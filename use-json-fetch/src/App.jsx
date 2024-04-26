import './App.css'
import {Data, Error, Loading} from "./components/index.js";

function App() {
  return (
    <div className="container">
      <Data/>
      <Loading/>
      <Error/>
    </div>
  )
}

export default App
