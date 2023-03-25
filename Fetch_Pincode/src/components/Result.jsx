import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"

const Result = ({pincode,postalData}) => {
const [filteredOffices,setFilterOffices]=useState(postalData.PostOffice);
  
function handleFilter(e){
    let officesFiltered=postalData.PostOffice.filter((office)=>office.Name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilterOffices(officesFiltered);
  }
  
  return (
    <div className='Result'>
        <strong>Pincode: {pincode}</strong>
        <div><strong>Message: </strong>{postalData.Message}</div>
        <div className='searchFilter'>
          <BiSearchAlt/>
          <input type="text" placeholder='Filter' onChange={handleFilter}/>
        </div>
        <div className='filteredDiv'>
          {
            filteredOffices.map((office,index)=>{
              return<div className='PostOffice' key={index}>
                <strong><p>Name: {office.Name}</p></strong>
                <p>Branch Type: {office.BranchType}</p>
                <p>Delivery Status: {office.DeliveryStatus}</p>
                <p>District: {office.District}</p>
                <p>Division: {office.Division}</p>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Result