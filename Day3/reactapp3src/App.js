import ToggleMessages from './components/ToggleMessages';
import Props from './components/Props';
import {useState} from "react";
import './App.css';

function App() {
  const[name,setName]=useState("Aishuuuuuu:)");
  return (
    <div className="App">
      <Props username={name}/>
      <ToggleMessages/>

    </div>
  );
}

export default App;
