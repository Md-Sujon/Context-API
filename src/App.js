import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>App.js Count: {count}</h3>
      <Header count = {count} setCount = {setCount}></Header>
      <Home count={count} setCount={setCount}></Home>
      <Shipment count={count} setCount={setCount}></Shipment>
    </div>
  );
}

export default App;
