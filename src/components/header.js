import React from 'react'
import "../ui1.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='main-heading'>
      <Link className='logo' to="/"> <h1 className='gametitle'>The Number Guesser</h1></Link>
    </div>
  )
}

export default Header