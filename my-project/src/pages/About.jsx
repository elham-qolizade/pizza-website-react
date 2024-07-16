import React from 'react'
import multiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/about.css'
export default function () {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${multiplePizzas})` }} ></div>
            <div className='aboutBottom'>
                <h1>About us</h1>
                <p>At Pizza Hut, we don’t just make pizza. We make people happy. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do. With more than 60 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create food we’re proud to serve and deliver it fast, with a smile.</p>
            </div>
        </div>
    )
}
