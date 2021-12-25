import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(CategoriesContext)
    
   
    return (
        <div>
            <h3>This is Header :{count}</h3>
            <button onClick={() => setCount(count+5)}>Click now 5</button>
        </div>
    );
};

export default Header;