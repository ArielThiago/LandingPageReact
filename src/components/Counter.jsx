import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
        // Define a cor com base no valor de count
        const getColor = () => {
            if (count === 0) return 'white';
            if (count > 0) return 'green';
            return 'red';
        };

    return (
        <div>
        <h1 className='titulo' style={{ color: getColor() }}>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );

}