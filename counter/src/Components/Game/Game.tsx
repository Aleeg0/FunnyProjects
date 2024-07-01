import React from 'react';

const Game = () => {
    return (
        <div className="game">
            <div className="progressBar">
                <div className='progress'></div>
            </div>
            <h1 className="gameTitle">
                Что такое реакт?
            </h1>
            <ul>
                <li>Библиотека</li>
                <li>Фреймворк</li>
                <li>Язык Программирования</li>
            </ul>
        </div>
    );
};

export default Game;