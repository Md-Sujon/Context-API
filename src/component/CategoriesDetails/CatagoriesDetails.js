import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';
import AgainCategories from '../AgainCategories/AgainCategories';

const CatagoriesDetails = () => {
    const [count, setCount] =useContext(CategoriesContext)
    return (
        <div>
            <h5>This is CatagoriesDetails : {count}</h5>
            <button onClick={ () => setCount(count+1)}>Click 1</button>
            <AgainCategories ></AgainCategories>
        </div>
    );
};

export default CatagoriesDetails;