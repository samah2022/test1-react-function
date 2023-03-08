import React from "react";
import Header from "./Header";
import Text from "./Text";
import SOcial from "./Social";
import Team from "./Team";
import Navbar from "./Navbar";
import Login from "./Login"; 

import { Routes,Route } from "react-router-dom";


function App(){
  //JSX
  return( <div className="container">
    <Header/>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Text />}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/social" element={<SOcial />}></Route>
      <Route path="/login/:id" element={<Login />}></Route>
    </Routes>
  </div>)
}

export default App;
