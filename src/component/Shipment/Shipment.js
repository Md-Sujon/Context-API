import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const Shipment = () => {
    
    const [count, setCount] = useContext(CategoriesContext);
    return (
        <div>
            <h4>This is Shipment: {count}</h4>

            <button onClick={() => setCount(count+3) }>Click 3</button>
        </div>
    );
};

export default Shipment;