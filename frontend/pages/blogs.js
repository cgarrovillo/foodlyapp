import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from '../components/Interaction/SearchBar'
import Card from '../components/Content/Card'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

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
      <Head>
        <title>Food Blog | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
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
      </main>
    </>
  )
}
