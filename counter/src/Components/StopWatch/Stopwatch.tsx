import React, {FC, useEffect} from 'react';

interface StopwatchProps {
    id: number;
    onClickDelete: (id:number) => void;
}

const Stopwatch: FC<StopwatchProps> = ({id,onClickDelete}) => {
    const [time,setTime] = React.useState<number>(0);
    const [isPaused,setIsPaused] = React.useState<boolean>(true);
    const timerId = React.useRef< ReturnType<typeof setInterval>| null>(null);
    const startTime = React.useRef<number>(0);

    useEffect(() => {
        if (!isPaused) {
            console.log('effect func')
            timerId.current = setInterval(() => {
                setTime(Date.now() - startTime.current);
            }, 10);
        }
        return () => {
            console.log('effect func ret')
            clearInterval(timerId.current!);
        }
    }, [isPaused]);

    const changer = () => {
        if (isPaused){
            startTime.current = Date.now() - time;
        }
        setIsPaused(!isPaused);
    }

    const resetStopwatch = () => {
        startTime.current = Date.now();
        setTime(t => t = 0);
    }

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor(time / 60000 % 60);
    const seconds = Math.floor(time / 1000 % 60);
    const milliseconds = time % 100;

    return (
        <div className="stopwatch">
            <h1>
                {hours.toString().padStart(2,"0")}:
                {minutes.toString().padStart(2,"0")}:
                {seconds.toString().padStart(2,"0")}:
                {milliseconds.toString().padStart(2,"0")}
            </h1>
            <div className="controls">
                <button className={isPaused ? "controls__pause":"controls__resume"} onClick={changer}>
                    {isPaused ? `▷` : `||`}
                </button>
                <button className="controls__reset" onClick={resetStopwatch}>↻</button>
                <button className="controls__cancel" onClick={() => onClickDelete(id)}>✖</button>
            </div>
        </div>
    );
};

export default Stopwatch;