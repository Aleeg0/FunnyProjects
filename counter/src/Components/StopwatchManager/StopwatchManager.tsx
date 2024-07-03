import React, {FC} from 'react';

interface StopwatchManagerProps {
    onClickAdd: () => void;
    onClickReset: () => void;
}

const StopwatchManager: FC<StopwatchManagerProps> = ({onClickAdd,onClickReset}) => {
    return (
        <div className="stopwatchManager">
            <h1>Stopwatch manager</h1>
            <div className="controls">
                <button
                    type="button"
                    className='controls__reset'
                    onClick={onClickReset}
                >Reset All</button>
                <button
                    type="button"
                    className='controls__add'
                    onClick={onClickAdd}
                >Add</button>
            </div>
        </div>
    );
};

export default StopwatchManager;