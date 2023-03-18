import React from "react";
import AllRoutes from "./allRoutes/AllRoutes";
import logo from "./logo.svg";
import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <div className="App">
      {/* <CreateTodo /> */}
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
