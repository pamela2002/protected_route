import React from "react";
import { Route, Routes } from "react-router";
import Add from "./components/Add";
import Update from "./components/Update";
import Login from "./components/Login";
import Register from "./components/Regsiter";
import Protected from "./components/Protected";


const App = () =>{
  return(
    <>
    
      <Routes>
      <Route path="/register" element={<Register/>}/>
        <Route path="/add" element={<Protected Cmp={Add}/>}/>
        <Route path="/update" element={<Protected Cmp={Update}/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}
export default App;
