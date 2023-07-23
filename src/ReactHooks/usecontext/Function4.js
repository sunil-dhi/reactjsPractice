import React, { useContext } from 'react'
import {UserContext} from './UseContextHook'
const Function4 = () => {
    const user=useContext(UserContext)

  return (
    <div>
        <h1>{`hello${user} again!`}</h1>
        <h1>function4</h1>
        
        </div>
  )
}

export default Function4