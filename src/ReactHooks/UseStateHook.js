// import React,{useState} from 'react'

// const UseStateHook = () => {

//     let [name,setName]=useState('sunil')
//      const changeName=(()=>{
//         setName('sunil dhiman')
//      })
//   return (
//     <div>
//        <h1>my name is {name}</h1>
//       <button onClick={changeName}>click me</button>

//     </div>
//   )
// }

// export default UseStateHook



import React,{useState} from 'react'

const UseStateHook = () => {
 const[name,setName]=useState('sunnu');
    const ChangeHandler=(e)=>{
        setName(e.target.value)
    }
    
  return (
    <div>
       
   <input type="text" value={name} onChange={ChangeHandler} placeholder='enter name' />
   <p>{name}</p>
    </div>
  )
}

export default UseStateHook









