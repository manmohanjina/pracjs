import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostTodo from "./Todo/addTodo";
import Navbar from "./loginform/navbar/Navbar";
import AllRoutes from "./loginform/navbar/allRoutes/allRoutes";

function App() {
  return (
    <div className="App">
      {/* <PostTodo/> */}
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
