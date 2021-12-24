import React from 'react';

const Shipment = (props) => {
    const {count,setCount} = props;
    return (
        <div>
            <h4>This is Shipment: {count}</h4>

            <button onClick={() => setCount(count+3) }>Click</button>
        </div>
    );
};

export default Shipment;