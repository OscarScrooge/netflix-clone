import React, {useEffect, useState} from 'react';
import axios from "../axios/axios";
import requests from "../axios/requests";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import "../style/Banner.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


function Banner(props) {

    const [movie,setMovie] = useState([]);
    const [trailerURL,setTrailerURL] = useState("");

    const imageBasePath= "https://image.tmdb.org/t/p/original";
    const  opts ={
        height: "390",
        width: "100%",
        playerVars :{
            //https://developers.google.com/youtube/player_parameters
            autoplay:1
        }
    };

    useEffect(()=>{
        const request = axios.get(requests.fetchTrendings);
        /**/
        /*movie.data.results[2]*/
        request.then(movie => setMovie(movie.data.results[Math.floor(Math.random()*movie.data.results.length-1)]));
    },[]);

    const truncateOverview =(string,n)=>{
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    };

    const handleClick=(movie)=>{

        if (trailerURL){
            setTrailerURL('');
        }else{
            movieTrailer(movie?.title || movie?.original_title || "")
                .then((url)=>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(urlParams.get('v'));
                }).catch((error)=>console.log(error));
        }
    };


    return (
        <div>
        <header
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(${imageBasePath}${movie?.backdrop_path})`,
                backgroundPosition : "center center"
            }}

        >
            <div className="banner-content">
                <span className="banner-content-title">{movie?.title || movie?.original_title}</span>
                <p className="banner-content-overview">{truncateOverview(movie?.overview,150)}</p>
                <div className="banner-content-buttons">
                    <button className="banner-button-left"  onClick={event => handleClick(movie)}>
                        <PlayArrowIcon className="banner-button-icon"/>
                        <p>
                            Play
                        </p>
                    </button>
                    <button className="banner-button-right">
                        <InfoIcon className="banner-button-icon"/>
                        <p>
                            More Info
                        </p>

                    </button>
                </div>
            </div>
            <div className="banner-bottom"/>
        </header>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
        </div>

    );
}

export default Banner;
