import { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

export const CategoriesContext = createContext();

function App() {
  const [category, setCategory] = useState('Laptop');

  return (
    <CategoriesContext.Provider value={[category, setCategory]} >
      <h1>App.js Count: {category}</h1>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoriesContext.Provider>
  );
}

export default App;
