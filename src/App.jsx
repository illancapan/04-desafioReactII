import PantallaPrueba from "./views/PantallaPrueba";
import "./App.css";
import  ApiProvider  from "./context/ApiContext";

function App() {
  return (
    <>
      <ApiProvider>
        <PantallaPrueba />
      </ApiProvider>
    </>
  );
}

export default App;
