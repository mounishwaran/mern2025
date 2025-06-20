import React from 'react'

const Home = ({items,users}) => {
  return (
    <div>
      home page
        <ol>
          {items.map((fruits)=>(<li>{fruits}</li>))}
        </ol> 
        <h1>{users.name}</h1>
        <h1>{users.pass}</h1>
    </div>
  )
}

export default Home
