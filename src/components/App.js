import React from "react";
import Header from "./Header";
import Text from "./Text";
import SOcial from "./Social";
import Team from "./Team";


function App(){
  //JSX
  return( <div className="container">
    <Header/>
    <Text/>
    <SOcial/> 
    <Team/>
  </div>)
}

export default App;
