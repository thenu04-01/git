import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h2>I am from {props.country}</h2>
      
    </div>
  )
}

export default Welcome
