import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/appReducer/app.action';
import './styles/DetailPage.css'

const DetailPage = () => {
  const {id}=useParams();
  const postData=useSelector((store)=>store.AppReducer.data)
  const [currentData,setCurrentData]=useState();
  console.log(currentData)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(postData.length===0){
      dispatch(getData())
    }
    if(id){
      const current=postData.find((el)=>el.id==id)
      setCurrentData(current)
    }
  },[])
  return (
    <div className='detailPage'>
        <Navbar/>
        {(currentData!==undefined)
        ?<div className='details'>
          <h4>Details Page For Post With ID {currentData.id}</h4>
          <img src={`https://picsum.photos/200?random=${currentData.id}`} alt="" />
          <p>User ID: {currentData.id}</p>
          <p>Title: {currentData.title}</p>
          <p>Body: {currentData.body}</p>
        </div>
        :""
        }
        </div>
  )
}

export default DetailPage