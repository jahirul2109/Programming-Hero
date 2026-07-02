import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <div style={{display :"flex" , gap :"3px" , fontSize :"20px", fontWeight :"bold"}}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
        <NavLink to={'/'}>UserData</NavLink>
    </div>
  )
}
