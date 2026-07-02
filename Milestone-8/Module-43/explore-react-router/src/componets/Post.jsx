import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import { PostDatails } from './PostDatails';

export const Post = ({ post }) => {
    const navigate = useNavigate();
    const handelNavigate = ()=> {
        navigate (`/posts/${post.id}`)
    }
    console.log(post)
    return (

        <div style={{border : "2px solid red", borderRadius : "20px"}}>
            <h1>{post.body}</h1>
            <button onClick={handelNavigate}>Datails</button>
        </div>

    )
}
