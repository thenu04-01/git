import { useState } from "react"
import axios from 'axios'
import { useEffect } from 'react'

const Form = () => {
    const [FormData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        department:'',
    })
    const [users,setUsers] = useState([]);
    const fetchUsers=async()=>{
        const res = await axios.get('http://localhost:3000/getform')
        setUsers(res.data)
        console.log(res.data);
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
        
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3000/postform',FormData)
        console.log(FormData);
      
    }
  return (
    <div  style={{ textAlign: 'left' }}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" value={FormData.name} onChange={handleChange} /><br /><br />
            <label htmlFor="">Email:</label>
            <input type="email" name="email" value={FormData.email} onChange={handleChange} /><br /><br />
            <label htmlFor="">Password:</label>
            <input type="password" name="password" value={FormData.password} onChange={handleChange} /><br /><br />
            <label htmlFor="">Department:</label>
            <input type="text" name="department" value={FormData.department} onChange={handleChange} /><br /><br />
            <button type="submit">Submit</button>
        </form>
        <h1>User details</h1>
        <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} | {user.email} | {user.department} </li>
                ))}
            </ul>
    </div>
  )
}

export default Form
