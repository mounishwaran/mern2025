import React from 'react';
import Child from './component/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Form from './pages/Form'

const App =()=> {
  var arr=["apple","banana","Orange"];
  var user={name : 'mounish',pass :'1234'}
  return (
    <>
    <div>
      <Child name="mounish" phn="9876543210" dept="IT"/>
      <Child name="mounishwaran" phn="9987654321" dept="CSE"/>
      <Home items={arr} users={user}/>
      <About/>
      <Contact/>
      <Skills/>
      <Form/>
    </div>
    </>
  )
}

export default App