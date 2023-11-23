import "./App.css";
import HOC from "./components/HOC";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
function App()
{
  return(
    <div className="App">
      <HOC />
      <Person1 />
      <Person2 />
    </div>
  );
}
export default App;