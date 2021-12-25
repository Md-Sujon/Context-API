import React, { useContext} from 'react';
import { CategoriesContext } from '../../App';


const Header = () => {
    const [category, setCategory] = useContext(CategoriesContext)
    

   
    return (
        <div>
            <h3>This is Header :{category}</h3>
            <button onClick={() => setCategory(category + 2)}>Laptop</button>
        </div>
    );
};

export default Header;