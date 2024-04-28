import { useState, createContext } from "react";

export const CarroContext = createContext();

const CarroProvider = ({ children }) => {
  const [carro, setCarro] = useState([]);
  return (
    <>
      <CarroContext.Provider value={{ carro, setCarro }}>
        {children}
      </CarroContext.Provider>
    </>
  );
};

export default CarroProvider;
