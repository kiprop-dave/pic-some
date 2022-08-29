import React from "react";
import {Route, Routes} from "react-router-dom"
import Photos from "./pages/Photos";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import "./App.css";

function App(){

  return(
    <div>
      <Header/>
      <Routes>
        <Route exact path = "/pic-some/" element ={<Photos/>}/>
        <Route path="/pic-some/cart" element ={<Cart/>}/>
      </Routes>
    </div>
  )
   
}
export default App