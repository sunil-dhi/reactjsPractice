import React,{createContext, useState} from 'react'
import Function1 from './Function1'
import Function2 from './Function2'
import Function3 from './Function3'
import Function4 from './Function4'

export const UserContext=createContext();
const UseContextHook = () => {
    const [name,setName]=useState('sunil')

  return (
    <div>
        <UserContext.Provider value={name}>
            <h1>{`hello ${name}`}</h1>
        <Function1 />
        <Function2 />
        <Function3 />
        <Function4 />
        </UserContext.Provider>
    </div>
  )
}

export default UseContextHook