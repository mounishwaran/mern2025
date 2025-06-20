import React from 'react'
import { Link } from 'react-router-dom'

export const Hooks = () => {
  return (
    <div style={{display:'flex',flexDirection:"column"}}>
        <Link to='/State'>Usestate</Link>
        <Link to='/Effect'>useEffect</Link>
    </div>
  )
}

export default Hooks