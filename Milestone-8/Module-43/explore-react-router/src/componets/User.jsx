import React from 'react'
import { Link } from 'react-router';

export const User = ({user}) => {
    const { name , email , username , website , phone} = user ;
  return (
    <div style={{border : "2px solid red" , margin : "2px" }}>
        <h1>Name :-{name}</h1>
        <p>Email :{email} </p>
        <p>Mobile : {phone} </p>
        <p>Website : {website}</p>
        <div>
            <Link to={`/users/${user.id}`}>
            <button>Details</button>
            </Link>
        </div>
    </div>
  )
}
