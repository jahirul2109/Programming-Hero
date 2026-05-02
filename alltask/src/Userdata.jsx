import { Suspense, useEffect, useState } from "react";

export default function Userdata () {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data , setData ] = useState ([]);
    useEffect (()=>{
        fetch(url)
        .then(res => res.json())
        .then(alldata => setData (alldata))
    },[])
   return(<Suspense fallback = {<h1> Data is Loading</h1>}>
    <div>{data.map((userlist)=>{
        return (
            <ol> 
                <li key={userlist.id} >{userlist.id}.{userlist.name}</li>
            </ol>
        )
    })}</div>
    </Suspense>)
}