import React from 'react'
import State from '../hooks/State'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../hooks/UserContext"
const About=()=> {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>Hi! {name}</h1>
        <Link to='/state'>UserState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link><br />
       <Link to='/effect'>UseEffect Example</Link><br />
       <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default About