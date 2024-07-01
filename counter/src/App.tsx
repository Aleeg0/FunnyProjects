import React from 'react';
import Game from "./Components/Game/Game";
import Result from "./Components/Result/result";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];


function App() {
    const [step, setStep] = React.useState<number>(0);
    const correct = React.useRef<number>(0);

    const onClickVariant = (choice: number) => {
        if (questions[step].correct === choice){
            correct.current++;
        }
        setStep(s => s + 1);
    }

    const onClickReset = () => {
        setStep(0);
        correct.current = 0;
    }

    return (
        <div className="app">
            {
                step !== questions.length ?
                    <Game
                        progress={Math.floor(step / questions.length * 100)}
                        question ={questions[step]}
                        onClickVariant={onClickVariant}
                    /> :
                    <Result
                        correct={correct.current}
                        count={questions.length}
                        onClickReset={onClickReset}
                    />
            }
        </div>
    );
}

export default App;
