import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'

function Banner() {

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;
    };
      
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

             let iNum =randomNumberInRange(1, 20)
            setMovie(response.data.results[iNum]);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
          });

    },[])



    return (

        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button1'><i class="fa-solid fa-play"></i>  Play</button>
                    <button className='button2'><i class="fa-solid fa-plus"></i> My List</button>
                </div>
                <p className='description'>{movie ? movie.overview : ""}</p>
            </div>
            <div className='fade'>

            </div>

        </div>
    )
}

export default Banner
