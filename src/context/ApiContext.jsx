import { useState, useEffect, createContext } from "react";
import pizzasData from "../data/pizzas.json";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPizza(pizzasData);
      } catch (error) {
        console.error("errror  data de pizzas.json:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <ApiContext.Provider value={{pizza, setPizza}}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
