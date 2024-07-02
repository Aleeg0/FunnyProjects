import React from 'react';

const StopwatchManager = () => {
    return (
        <div className="stopwatchManager">
            <h1>Stopwatch manager</h1>
            <div className="controls">
                <button
                    type="button"
                    className='controls__reset'
                >Reset All</button>
                <button
                    type="button"
                    className='controls__add'
                >Add</button>
            </div>
        </div>
    );
};

export default StopwatchManager;