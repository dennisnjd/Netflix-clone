import React, { useEffect, useState } from 'react'
import "../RowPost/RowPost.css"
import { useMyList } from '../../MyListContext'
import Navbar from '../Navbar/Navbar';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/constants'
import YouTube from 'react-youtube';


function MyList() {

    const { myList } = useMyList();  //accesing context 
    const [urlId, setUrlId] = useState('')

    useEffect(() =>{
            console.log("MyList Details : ",myList);

    })


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log("Trailer not present");
            }
        })
    }


    return (
        <><Navbar /><div className='row'>

            <h2 className="typeTitle">My List</h2>
            <div className="posters">


                {myList.map((obj) => (
                    <div key={obj.id} className="movie-container">
                        <img
                            className='poster'
                            src={`${imageUrl + obj.imgurl}`}
                            alt="File poster" />
                        <div className="options">


                            <div className="span-row">
                                <span style={{ textAlign: 'left' }}>{obj.title}</span>
                            </div>
                            <div className="squares-row">
                                <div className="squre"
                                    onClick={() => handleMovie(obj.id)}
                                >
                                    <i className="fa-solid fa-play fa-lg"></i>
                                </div>
                                <div className="squreA">
                                    <i className="fa-solid fa-plus fa-lg"></i>
                                </div>
                                <div className="squreA">
                                    <i className="fa-solid fa-thumbs-up fa-lg"></i>
                                </div>
                                <div className="squreD">
                                    <i className="fa-solid fa-chevron-down fa-lg"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div></>
    )
}

export default MyList
