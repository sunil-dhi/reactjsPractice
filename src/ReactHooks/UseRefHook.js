// // The useRef Hook allows you to persist values between renders.

// // It can be used to store a mutable value that does not cause a re-render when updated.

// // It can be used to access a DOM element directly.

// import React, { useEffect, useRef, useState } from "react";

// const UseRefHook = () => {
//   const [data, setData] = useState("hello");

//     const count=useRef(0)
// //   const [count, setCount] = useState(0);
//   useEffect(() => {
// //     setCount(count + 1);                          ///problem is infinite loop re-rendering now solutin is use useRef hook
//          count.current=count.current+1                                           
//    });

//   return (
//     <div>
//       <input type="text"  value={data} onChange={(e) => setData(e.target.value)} />
//       <p>number of time it renders:{count.current}</p>
//     </div>
//   );
// };

// export default UseRefHook;                   


//created a mutable variable count using useRef which hinders re-rendering process.

// 2nd usecase of useRef hook is we can access DOM elemenrt directly

import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [data,setData]=useState('');
    const user=useRef('hell')

    const clickHandler=()=>{
        user.current.style.backgroundColor="red"
    }
  return (
    <div>
         <input type="text" ref={user} value={data} onChange={(e)=>setData(e.target.value)} />
         <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default UseRefHook
