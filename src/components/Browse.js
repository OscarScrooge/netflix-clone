import React, {useEffect} from 'react';
import requests from "../axios/requests";
import Row from "./Row";
import Nav from "./Nav";
import Banner from "./Banner";
function Browse(props) {


    return (
        <div>
           <Nav/>
           <Banner/>
           {/*<div className="banner">*/}
           {/*   <img className="banner-poster" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfdEwsnrhnx4jeNYKDQQK7PKIXWz9L2xS85wQtDWQYlbp3TWyatnxau3PkcV3dEGhdQwVAKIszSa81ImKsQH3sUu1iVp.webp?r=8fc"/>*/}
           {/*</div>*/}
          <div className="browse-rows">
              <Row title="Popular on Netflix" fetchURL={requests.fetchPopular} isLargeRow/>
              <Row title="Trending now" fetchURL={requests.fetchTrendings} />
              <Row title="Action movies" fetchURL={requests.fetchAction}/>
              <Row title="Adventure movies" fetchURL={requests.fetchAdventure}/>
              <Row title="Top rated" fetchURL={requests.fetchTopRated} isLargeRow isMediumRow/>
              <Row title="Comedy movies" fetchURL={requests.fetchComedy}/>
              <Row title="Crime movies" fetchURL={requests.fetchCrime}/>
              <Row title="Drama movies" fetchURL={requests.fetchDrama}/>
              <Row title="Horro movies" fetchURL={requests.fetchHorror}/>
          </div>
        </div>
    );
}

export default Browse;
