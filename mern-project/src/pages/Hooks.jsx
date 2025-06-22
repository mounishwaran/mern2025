import React from 'react'
import { Link } from 'react-router-dom'

export const Hooks = () => {
  return (
    <div style={{display:'flex',flexDirection:"column"}}>
        <Link to='/State'>Usestate</Link>
        <Link to='/Effect'>useEffect</Link>
        <Link to='/Ref' > UseRef</Link>
        <Link to='/Reducer'>UseReducer</Link>
    </div>
  )
}

export default Hooks