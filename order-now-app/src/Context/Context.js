import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./Reducer";

export const Cart = createContext();
faker.seed(20)

const Context = ({ children }) => {
 

  const initial = [...Array(20)].map(() => ({
    id: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image:faker.image.urlLoremFlickr(),
    inStock:faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery:faker.datatype.boolean(),
    ratings:faker.helpers.arrayElement([1,2,3,4,5])
  }));
  // console.log(initial);

  const [state, dispatch] = useReducer(CartReducer,{
    initial:initial, 
    cart:[]
  });


  return (
    <>
      <Cart.Provider value={{state , dispatch}}>{children}</Cart.Provider>
    </>
  );
};

export default Context;



export function CartState(){
 
  return useContext(Cart);

}

