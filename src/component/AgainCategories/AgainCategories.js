import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const AgainCategories = () => {
    const [count, setCount] = useContext(CategoriesContext);
    
    return (
        <div>
            <h6>This is AgainCategories :{count} </h6>
            <button onClick={ () => setCount(count+1)}>Click 1</button>
        </div>
    );
};

export default AgainCategories;