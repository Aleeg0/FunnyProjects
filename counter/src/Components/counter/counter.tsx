import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState<number>(0);

    return (
        <div className="counter">
            <h2 className="counter_text">
                {count}
            </h2>
            <div className="counter_buttons">
                <button
                    type='button'
                    className='counter_plus'
                    onClick={() => setCount(c => c + 1)}
                >+</button>
                <button
                    type='button'
                    className='counter_minus'
                    onClick={() => setCount(c => c - 1)}
                >-</button>
            </div>
        </div>
    );
};

export default Counter;