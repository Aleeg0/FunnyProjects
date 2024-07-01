import React, {FC} from 'react';

interface ResultProps {
    correct: number;
    count: number;
    onClickReset: () => void;
}

const Result: FC<ResultProps> = ({correct, count, onClickReset}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='yee!'/>
            <h2>Вы отгадали {correct} из {count}!</h2>
            <button type="button" onClick={onClickReset}>Попробовать снова</button>
        </div>
    );
};

export default Result;