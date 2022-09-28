import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
        </div>
    );
};

export default Nav;