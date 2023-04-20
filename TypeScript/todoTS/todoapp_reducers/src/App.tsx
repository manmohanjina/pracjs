import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decano_FN, increno_FN } from './reducer/action';

type store={
  count:number
}

function App() {
  
  const count=useSelector((store:store)=>store.count)
   const dispatch=useDispatch()

  
  return (
    <div className="App">
      <button onClick={()=>dispatch(decano_FN(1))}  >inc</button>
  <button>{count}</button>
 <button onClick={()=>dispatch(increno_FN(1))} >dec</button>    
    </div>
  );
}

export default App;
