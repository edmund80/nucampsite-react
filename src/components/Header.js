import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <div className='container'>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} alt='nucamp logo' />
                </NavbarBrand>
            </div>
      </Navbar>
    );
};

export default Header;