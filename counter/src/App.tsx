import React, {useEffect} from 'react';
import Stopwatch from "./Components/StopWatch/Stopwatch";
import StopwatchManager from "./Components/StopwatchManager/StopwatchManager";
import stopwatch from "./Components/StopWatch/Stopwatch";


function App() {

    const [watches, setWatches] = React.useState<Array<number>>([0]);

    const onClickDelete = (id:number) => {
        let newArr = watches.filter(curId => curId !== id);
        setWatches(newArr);
    }

    const onClickAdd = () => {
        let newArr = [...watches];
        newArr.push(Math.floor(Math.random()*1000));
        setWatches(newArr);
    }

    const onClickReset = () => {
        let newWatch:Array<number> = [];
        for (let i = 0;i < watches.length; i++) {
            newWatch.push(Math.floor(Math.random()*1000));
        }
        setWatches(newWatch);
    }

    return (
        <div className="app">
            <StopwatchManager onClickAdd={onClickAdd} onClickReset={onClickReset} />
            {watches.map((id,index)=> {
                console.log(id);
                    return <Stopwatch key={index} id={id} onClickDelete={onClickDelete}/>
            }
            )}
        </div>
    );
}

export default App;
