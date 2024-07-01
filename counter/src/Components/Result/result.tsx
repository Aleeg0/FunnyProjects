import React, {FC} from 'react';
import congratzImg from '../../images/Congratz.png';

interface ResultProps {
    correct: number;
    count: number;
    onClickReset: () => void;
}

const Result: FC<ResultProps> = ({correct, count, onClickReset}) => {
    return (
        <div className="result">
            <img src={congratzImg} alt='yee!'/>
            <h1>Вы отгадали {correct} из {count}!</h1>
            <button type="button" onClick={onClickReset}>Попробовать снова</button>
        </div>
    );
};

export default Result;