import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
