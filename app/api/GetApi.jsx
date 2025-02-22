
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'





export default function GetApi() {

const [users,setusers]=useState([])

  useEffect(()=>{
    axios.get("https://moviesapi.ir/api/v1/movies?page={page}")
    .then(response=>setusers(response.data.data))
    .catch(e=>console.log(e))
  },[])


  
  return (
    <>
  <div>

{users.map((user,i)=>(
  <div key={i}>{user.title}</div>
  


))}

  </div>
    </>
  )
}
