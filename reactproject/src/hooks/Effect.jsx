import {useEffect } from "react"
import {useState } from "react"
const Effect = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])
    const [posts,setPosts]=useState([])
    //useEffect(()=>{
    //    console.log("from useEffect");

    //},[count])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>setUsers(data))


    },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data)=>setPosts(data))
    })
    console.log(users);

    return (
        <div>

            
            <u1>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
            
                ))}
            </u1>
            <u1>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </u1>
        </div>
    )
}
export default Effect