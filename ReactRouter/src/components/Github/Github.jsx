import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
      
    const data = useLoaderData()

    /*
    
    const[data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ry-Rahul')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })

    },[])
    
    */
    

  return (
      <div className='text-center bg-gray-700 text-white p-4 m-4 text-3xl'>Github Followers : {data.followers?data.followers:'loading...'}
      <img src={data.avatar_url?data.avatar_url:'loading...'} alt="github picture" width={300} />
      </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ry-Rahul')
    return response.json()
}