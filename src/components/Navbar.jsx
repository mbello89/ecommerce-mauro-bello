
import { ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import './Navbar.css';
import { NavbarItems } from './NavbarItems';


function Navbar() {
    return (
        <nav className='Nav'>
            <img src="https://i.ibb.co/5GgmDvx/logo-Vagon.jpg" alt="Logo" className='Logo' />
            <h1>
                Un Vagon de Ideas
            </h1>
            <ul className='NavItems'>
                {NavbarItems.map((item,index) => {
                    return (    
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.tittle}
                            </a>
                        </li>
                    )
                })}
                <div>
                    <ShoppingCartOutlined className='Badge'/>
                </div>
            </ul>    
        </nav>
    )
}

export default Navbar;