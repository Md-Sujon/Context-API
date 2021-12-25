import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const Shipment = () => {
    
    const [category, setCategory] = useContext(CategoriesContext);
    return (
        <div>
            <h4>This is Shipment: {category}</h4>

            <button onClick={() => setCategory(category+3) }>Click 3</button>
        </div>
    );
};

export default Shipment;