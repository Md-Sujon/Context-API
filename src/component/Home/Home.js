import React from 'react';

const Home = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h3>This is Header :{count}</h3>
            <button onClick={ () => setCount(count+1)}>Click</button>
        </div>
    );
};

export default Home;