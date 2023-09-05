import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Money Heist</h1>
                <div className='banner_buttons'>
                    <button className='button1'><i class="fa-solid fa-play"></i>  Play</button>
                    <button className='button2'><i class="fa-solid fa-plus"></i> My List</button>
                </div>
                <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minus excepturi dignissimos, nesciunt nostrum doloribus soluta nobis itaque iusto earum tenetur mo</p>
            </div>
            <div className='fade'>

            </div>

        </div>
    )
}

export default Banner
