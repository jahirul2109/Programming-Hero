import React from 'react'
import { useLoaderData } from 'react-router'

export const UserDatailes = () => {
    const loadData = useLoaderData();
    console.log(loadData)
  return (
    <div>
        <h1>Full Information</h1>
        <span>Username : {loadData.username}</span>
      <h4> Company : {loadData.company.name}</h4> 
      <h4> Datails of Company : {loadData.company.bs}</h4> 
      <h2>Address</h2>
      <h4> City : {loadData.address.city}</h4>
      <ul>
        <li>Street : {loadData.address.street}</li>
        <li>Zip Code : {loadData.address.zipcode}</li>
        <li>Latitude: {loadData.address.geo.lat}</li>
        <li>Langtitude : {loadData.address.geo.lng}</li>
      </ul>
    </div>
  )
}
