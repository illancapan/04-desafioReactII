import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ApiProvider from "./context/ApiContext";
import CarroProvider from "./context/CarroContext";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pizza from "./views/Pizza";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarroProvider>
          <ApiProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:pizzaName" element={<Pizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ApiProvider>
        </CarroProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
