import React, { useEffect, useState } from 'react';
import "./RowPost.css"
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/constants'
import YouTube from 'react-youtube';


function RowPost(props) {

  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([])
  const [urlId, setUrlId] = useState('')
  const [listClicked, setListClicked] = useState(false);



  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results);
      console.log("details : ", response.data.results);
    }).catch(err => {
      alert('API error')
    })

  }, [])

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

  const addtoMyList = (obj) => {
    setListClicked(!listClicked)
    let details = {
      title: obj.title ? obj.title : obj.name,
      id: obj.id,
      imgurl: obj.backdrop_path,
    };

    setMyList((prevList) => [...prevList, details]);
    console.log("Added to my list is:", details);

  };

  useEffect(() => {
    console.log("All movies added to myList are :", myList);
  }, [myList]);


  return (
    <div className='row'>

      <h2 className="typeTitle">{props.title}</h2>
      <div className="posters">


        {movies.map((obj) => (
          <div key={obj.id} className="movie-container">
            <img
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="File poster"
            />
            <div className="options">


              <div className="span-row">
                <span style={{ textAlign: 'left' }}>{obj.title ? obj.title : obj.name}</span>
              </div>
              <div className="squares-row">
                <div className="squre"
                  onClick={() => handleMovie(obj.id)}
                >
                  <i className="fa-solid fa-play fa-lg"></i>
                </div>
                <div className="squreA" onClick={addtoMyList}>
                  {listClicked ? (
                    <i className="fa-solid fa-check fa-lg"></i> // Display a checkmark icon when clicked
                  ) : (
                    <i className="fa-solid fa-plus fa-lg"></i> // Display a plus icon initially
                  )}
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
    </div>
  )
}

export default RowPost
