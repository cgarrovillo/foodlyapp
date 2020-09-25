import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setBlog } from '../redux/BlogSlice'

import SearchBar from '../components/Interaction/SearchBar'
import LandscapeCard from '../components/Content/Card'

export default function Blogs() {
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector((state) => state.blog)

  useEffect(() => {
    //Fetch the data and store it into our Store's state
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API}/api/blogs`,
    })
      .then((res) => {
        dispatch(setBlog(res.data))
        setIsLoaded(true)
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
      <div className="container">
        <LandscapeCard />
        <LandscapeCard />
        <LandscapeCard />
        <LandscapeCard />
      </div>
    </>
  )
}
