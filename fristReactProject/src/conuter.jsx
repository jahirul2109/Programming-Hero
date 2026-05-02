import { useState } from "react";

export default function Counter() {
    const [count, setConut] = useState(0)
    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={() => {setConut (count + 1)}} >Add</button>
        </>
    )
}