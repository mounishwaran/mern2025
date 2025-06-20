import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom';
import { Login } from '../pages/login';

export const Nav = () => {
  return (
    <div>
        <Login/>
        <nav className='navbar'>
            <Link to='/home' className='Link'>Home</Link>
            <Link to='/about' className='Link'>About</Link>
            <Link to='/contact' className='Link'>Contact</Link>
            <Link to='/skills' className='Link'>Skills</Link>
            <Link to='/form' className='Link'>Form</Link>
            <Link to='/child' className='Link'>Child</Link>
            <Link to='/counter' className='Link'>Counter</Link>
            <Link to='/hooks' className='Link'>Hooks</Link>
            
        </nav>
    </div>
  )
}
export default Nav

