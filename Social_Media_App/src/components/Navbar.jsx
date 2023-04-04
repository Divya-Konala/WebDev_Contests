import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navBar'>
        <Link to='/'>Social Media App</Link>
    </div>
  )
}

export default Navbar