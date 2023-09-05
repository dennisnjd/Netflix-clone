import React from 'react'
import "./Navbar.css";

function Navbar() {
    return (
        <div className='navbar'>
            <img className='navLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
            <div className='navOptions'> 
                <p className='navOption'>Home</p>
                <p className='navOption'>TV Shows</p>
                <p className='navOption'>Movies</p>
                <p className='navOption'>Recently Added</p>
                <p className='navOption'>My List</p>
            </div>
            <img className='navAvatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar logo" />
        </div>
    )
}

export default Navbar
