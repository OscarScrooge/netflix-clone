import React, {useEffect, useState} from 'react';
import '../style/Nav.css'
import {Link} from "react-router-dom";

function Nav(props) {
    const [show,handleShow] = useState(false);

    useEffect(()=>{
         window.addEventListener("scroll",()=>{
             if (window.scrollY>100){
                 handleShow(true);
             }else{
                 handleShow(false);
             }
         });
         return ()=>{
             window.removeEventListener("scroll")
         }
    },[])
    return (
            <div className={`nav ${show ? "nav-dark":""}`}>
                <Link to="/">
                <img className="nav-logo" src="http://pngimg.com/uploads/netflix/netflix_PNG32.png" atl=""/>
                </Link>
                <div className="nav-left">
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>Latest</span>
                    <span>My List</span>
                </div>
                <div className="nav-right">
                    <img className="avatar" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABWWT9Paohybk8Tl1JFcVemiIVLfyo2cR9iN34jG2yaKENy95LuUAw1LYoXCgclZhDOJMTsOElBV8KX4VFq2jFYdOCNFp.png?r=f08%22);" alt=""/>
                </div>
            </div>
    );
}

export default Nav;
