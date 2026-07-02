import React from 'react'
import { useLoaderData } from 'react-router'
import { User } from './User';
export const Users = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            {
                data.map((user)=> <User key={user.id} user = {user}></User>)
            }
        </div>
    )
}
