import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const [count, setCount] = useContext(CategoriesContext)
  
    return (
        <div>
            <h2>This is Home :{count}</h2>
            <button onClick={ () => setCount(count+1)}>Click 1</button>
            <Categories count = {count} setCount={setCount}></Categories>
        </div>
    );
};

export default Home;