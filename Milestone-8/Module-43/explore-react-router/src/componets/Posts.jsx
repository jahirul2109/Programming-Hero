import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import { Post } from './Post';

export const Posts = ({promise}) => {
  const postData = use(promise);
  console.log(postData)
  return (
    <div style={{display :"grid", gridTemplateColumns :"1fr 1fr 1fr" , gap : "4px"}}>
      {
        postData.map((post)=> <Post key={post.id} post = {post}></Post>)
      }
    </div>
  )
}
