import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./Reducer";

export const Cart = createContext();

const Context = ({ children }) => {
 

  const initial = [...Array(20)].map(() => ({
    id: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }));
  console.log(initial);

  const [state, Dispatch] = useReducer(CartReducer,{
    initial:initial, 
    Cart:[]
  });


  return (
    <>
      <Cart.Provider value={{state , Dispatch}}>{children}</Cart.Provider>
    </>
  );
};

export default Context;



export function CartState(){
 
  return useContext(Cart);

}

