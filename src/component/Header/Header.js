import React from 'react';

const Header = (props) => {
    const {count,setCount} = props;
    
   
    return (
        <div>
            <h3>This is Header :{count}</h3>
            <button onClick={() => setCount(count+5)}>Click now</button>
        </div>
    );
};

export default Header;