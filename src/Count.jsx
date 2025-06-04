import { useState } from "react"

export default function Count(){

    const countStyle = {
        border: "1px solid yellow",
        borderRadius: "10px",
        padding: "10px",

    }

    const adder =(num)=>{
        setCount(count+num);
    }

    const [count, setCount] = useState(0);
    return(
        <div style={countStyle} className="card">
            <h1>Count: {count}</h1>
            <button onClick={()=>adder(5)}>Add</button>
        </div>
    )
}