import "./App.css";
import Context from "./Context/Context";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DropDown from "./components/DropDown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Navbar></Navbar>
          <Home></Home>
          <Routes>
            {/* <Route path="/Cart" exact><Cart></Cart></Route> */}
            <Route path="/Cart" element={ <Cart />}>
             
            </Route>
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
