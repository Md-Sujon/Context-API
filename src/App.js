import { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

export const CategoriesContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoriesContext.Provider value={[count, setCount]} >
      <h1>App.js Count: {count}</h1>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoriesContext.Provider>
  );
}

export default App;
