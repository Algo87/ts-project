import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            Counter: {counter}
            <button className={classes.btn} onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

