
// The useReducer Hook is similar to the useState Hook.

// It allows for custom state logic.

// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// import React, { useState } from 'react'

// const UseReducerHook = () => {
     
//     const [count,setCount]=useState(0)

//   return (
//     <div>
//            <button onClick={()=>setCount(count+1)}>+</button>
//            <button onClick={()=>setCount(count+2)}>2+</button>
//            <button onClick={()=>setCount(count+3)}>3+</button>
//            <p>value:{count}</p>
//            <button onClick={()=>setCount(count-1)}>-</button>
//            <button onClick={()=>setCount(count-2)}>2-</button>
//            <button onClick={()=>setCount(count-3)}>3-</button>

//     </div>
//   )
// }

// export default UseReducerHook


//problem with usestate hook is that to define it everytime for every new operation

// solution is usereducer hook

import React, { useReducer } from 'react'
let initialState=0
const reducer=(state,action)=>{
    if(action.type==='INC'){
        return state+1
    }
    if(action.type==='DEC'){
        return state-1;
    }
    if(action.type==='MUL'){
        return state*5;
    }
}
const UseReducerHook = () => {
     
    

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
           <button onClick={()=>dispatch({type:'INC'})}>+</button>
           <p>count:{state}</p>
           <button onClick={()=>dispatch({type:'DEC'})}>-</button>
           <button onClick={()=>dispatch({type:'MUL'})}>multiply by 5</button>
    </div>
  )
}

export default UseReducerHook


