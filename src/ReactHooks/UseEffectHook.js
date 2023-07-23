import React,{useEffect, useState} from 'react'

const UseEffectHook = () => {

    let [count,setCount]=useState(0);
    let [calculate,setCalculate]=useState(0);
    let [name,setName]=useState('sunil')
    
    let changeHandler=()=>{
        setCount((c)=>c+1)
        setName('sunil dhiman')

    }
    useEffect(()=>{
       setCalculate(()=>count*2)
    },[count],[name])

  return (
    <div>
      <p>value of count is:{count}</p>
      <button onClick={changeHandler}>+</button>
      <p>calculations:{calculate}</p>
      <p>{name}</p>
    </div>
  )
}

export default UseEffectHook