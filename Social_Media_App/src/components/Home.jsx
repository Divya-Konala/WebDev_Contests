import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/appReducer/app.action'
import './styles/Home.css'
import PostCard from './PostCard'


const Home = () => {
  const postData=useSelector((store)=>store.AppReducer.data)
  const dispatch=useDispatch()
  // console.log(postData)

  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div className='home'>
      <Navbar/>
      <div className='box'>
      <div className='cardsBox'>
      {
        postData.map((el,id)=>{
          return <PostCard key={id} item={el}/>
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Home