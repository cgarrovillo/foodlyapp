import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from '../components/Interaction/SearchBar'
import Card from '../components/Content/Card'

export default function Blogs() {
  const [allBlogs, setAllBlogs] = useState([])

  useEffect(() => {
    //Fetch the data and store it into our Store's state
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
    })
      .then((res) => {
        setAllBlogs(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <div className="header">
          <SearchBar />
        </div>
      </div>
      <div className="container cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
