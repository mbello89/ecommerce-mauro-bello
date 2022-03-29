
import { ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className='Nav'>
            <img src="https://i.ibb.co/5GgmDvx/logo-Vagon.jpg" alt="Logo" className='Logo' />
            <h1>
                Un Vagon de Ideas
            </h1>
            
                <Link to='/' className='nav-links'>
                    Home
                </Link>
                <Link to='/nosotras' className='nav-links'>
                    Nosotras
                </Link>
                <Link to='/' className='nav-links'>
                    Productos
                </Link>
                <Link to='/contacto' className='nav-links'>
                    Contactanos
                </Link>
                  
            <div>
                <ShoppingCartOutlined className='Badge'/>
            </div>
        </nav>
    )
}

export default Navbar;