import React, { useEffect, useRef, useState } from 'react'

export const Ref = () => {
    const [count,setCount]=useState(0);
    const value=useRef(0);
    useEffect(()=>{
        setTimeout(()=>{
            value.current=value.current+1
        },0)
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{value.current}</h1>

    </div>
  )
}
