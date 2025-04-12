import React from 'react'
import "./style.css"

const UseEffect = () => {
    const [count,setCount]=React.useState(0)
  return (
    <>
    <div className='center_div'>
    <p>{count}</p>
    <div className='button2' onClick={()=>setCount(count+1)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
  </div>
  </div>
    </>
  )
}

export default UseEffect
