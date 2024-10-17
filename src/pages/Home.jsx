import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'
export default function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headercontainer' >
                <h1>pedro`s pizzeria</h1>
                <p> pizza to fit any test</p>
                <Link to="/menu">
                    <button>open now</button>
                </Link>
            </div>
        </div>

    )
}
