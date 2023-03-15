import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux/es/exports";
import { state } from "./redux-arch/reducer";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import * as types from "../src/redux-arch/action-type"
import { handelInc } from "./redux-arch/action";

function App() {
  console.log(window.innerWidth)
  const count = useSelector((store: state) => store.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(handelInc(1))}>
        handelInc
      </button>
      <h3>count:{count}</h3>

      <button onClick={() => dispatch({ type:types.DECREMENTCOUNT, payload: 1 })}>
        handelDec
      </button>
    </div>
  );
}

export default App;
