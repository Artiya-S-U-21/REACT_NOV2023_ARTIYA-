import "./App.css";
import Lifecycle from "./components/Lifecycle";
import FunLifecycle from "./components/FunLifecycle";
import ClassLifecycle from "./components/ClassLifecycle";
function App()
{
  return (
    <div className="App">
      <Lifecycle />
      <FunLifecycle />
      <ClassLifecycle />
    </div>
  );
}
export default App;