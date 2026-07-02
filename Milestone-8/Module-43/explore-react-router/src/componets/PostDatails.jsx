import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';

export const PostDatails = ({ post }) => {
    const {id} = useParams();
    const [postData , setPostData ] = useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data=> setPostData(data))
    },[id])
    console.log(postData)
    return (
        <Suspense fallback = {<div>Loading.....</div>}>
        <div>
            <h2>Title :{postData?.title}</h2>
            <p> Body :{postData?.body}</p>
        </div>
        </Suspense>
    )
}
