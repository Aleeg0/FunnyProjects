import React, {FC} from 'react';

interface GameProps {
    progress: number;
    question: {
        title: string;
        variants: Array<string>;
    };
    onClickVariant: (index:number) => void;
}

const Game: FC<GameProps> = ({progress,question,onClickVariant}) => {
    return (
        <div className="game">
            <div className="progressBar">
                <div className='progress' style={{width: `${progress}%`}} ></div>
            </div>
            <h1 className="gameTitle">
                {question.title}
            </h1>
            <ul>
                {
                    question.variants.map((text,index) =>
                        <li key={index}
                            onClick={() => onClickVariant(index)}
                        >{text}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Game;