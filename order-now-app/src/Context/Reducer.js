// import { Cart } from "./Context";

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    // case "REMOVE_CART_DROPDOWN_ITEMS":
    //   // return {cart :state.cart.filter((p)=>p.id!==action.payload)}
    //   return "hello"



    default:
      return state;
  }
}
export default CartReducer;
