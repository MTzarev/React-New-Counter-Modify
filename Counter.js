import CounterList from './CounterList.js';
import { useState } from 'react'
function Counter() {
    let [count, setCount] = useState(0);
   
    return (
        <>
            <h2>Counter</h2>
            <ul>
                <CounterList>{count}</CounterList>
            </ul>
            <button onClick={() => setCount(count + 1)}>AddClick</button>
        </>
    )
}
export default Counter;