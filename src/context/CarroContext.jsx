import React, { useState, createContext } from "react";

export const CarroContext = createContext();

const CarroProvider = ({ children }) => {
  const [carro, setCarro] = useState([]);

  const agregarAlCarro = (pizza) => {
    setCarro([...carro, pizza]);
  };

  return (
    <CarroContext.Provider value={{ carro, agregarAlCarro }}>
      {children}
    </CarroContext.Provider>
  );
};

export default CarroProvider;
