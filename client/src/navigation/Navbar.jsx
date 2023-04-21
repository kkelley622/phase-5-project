import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        fetch("/logout", {method: 'DELETE'})
        navigate("/")
    }

  return (
    <div>
        <li><Link to="/:username">Home</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
    </div>
  )
}

export default Navbar