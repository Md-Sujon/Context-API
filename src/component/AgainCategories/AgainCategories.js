import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const AgainCategories = (props) => {
   const {name} = props.product;
    
    return (
        <div>
            <h6>This is AgainCategories :{name} </h6>
            
        </div>
    );
};

export default AgainCategories;