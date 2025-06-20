import {useEffect } from "react"
import {useState } from "react"
const Effect = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])
    //useEffect(()=>{
    //    console.log("from useEffect");

    //},[count])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>setUsers(data))


    },[])
    console.log(users);

    return (
        <div>

            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <u1>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
            
                ))}
            </u1>
        </div>
    )
}
export default Effect