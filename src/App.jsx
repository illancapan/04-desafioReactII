import Home from "./views/Home";
import "./index.css";
import  ApiProvider  from "./context/ApiContext";

function App() {
  return (
    <>
      <ApiProvider>
        <Home />
      </ApiProvider>
    </>
  );
}

export default App;
