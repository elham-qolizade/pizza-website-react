import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/contact.css'
export default function contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${pizzaLeft})` }}></div>
            <div className='righttSide'>
                <form id='contact-form' method='post' >
                    <label htmlFor="name">fullname</label>
                    <input type="text" placeholder='Enter full name...' />
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Enter email...' />
                    <label htmlFor="message">Message</label>
                    <input type="text" />
                    <textarea rows="6" placeholder='Enter massage...' name='massage'></textarea>
                    <button type='submit '> Send Massage</button>
                </form>
            </div>
        </div >
    )
}
