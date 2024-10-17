import React from 'react'
import { MenuList } from '../helpers/menuList'
import MenuuList from '../components/menuList'

export default function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>our Menu</h1>
            <div className='menuList'></div>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return <MenuuList key={key} image={menuItem.image} price={menuItem.price} name={menuItem.name} />
                })}
            </div>
        </div>
    )
}
