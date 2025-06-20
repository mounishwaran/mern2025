import React from 'react';
import Child from './component/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import { Form } from './component/Form';
import Navbar from './component/Nav';
import {Route,Routes} from 'react-router-dom'
import { Counter } from './component/Counter';
import {Hooks} from './pages/Hooks';
import { State } from './Hooks/State';
import { Login } from './pages/login';

const App =()=> {
  var arr=["apple","banana","Orange"];
  var user={name : 'mounish',pass :'1234'}
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element= {<Home items={arr} users={user}/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/child' element={<Child name="Mounish" phn="9876543210" dept="IT"/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      
      
    </div>
    </>
  )
}

export default App