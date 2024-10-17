import React from 'react'
import '../styles/menu.css'
export default function ({ image, name, price }) {
    return (
        <div className='menuItem f'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    )
}
