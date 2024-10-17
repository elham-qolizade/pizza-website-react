import React from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img className='logo-image' src={logo} alt="" />
            </div>
            <dev className='rightSide' >
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/menu'> Menu</Link>
                <Link to='/contact'> Contact </Link>


            </dev>
        </div>
    )
}

