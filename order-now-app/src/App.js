import "./App.css";
import Context from "./Context/Context";
import Navbar from "./components/Navbar";
import NewCart from "./components/NewCart";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DropDown from "./components/DropDown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Navbar></Navbar>
          
          <Routes>
            <Route path="/newCart"  element={<NewCart></NewCart>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
             
            {/* </Route> */}
          </Routes>
          {/* <Home></Home> */}
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
