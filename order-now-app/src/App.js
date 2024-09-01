import "./App.css";
import Context from "./Context/Context";
import Navbar from "./components/Navbar";
// import DropDown from "./components/DropDown";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Context>
        <Navbar></Navbar>
     
        <Home></Home>
      </Context>
    </>
  );
}

export default App;
