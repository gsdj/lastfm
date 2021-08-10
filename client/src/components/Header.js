import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

function Header(props) {
    return(
        <div className="header">
            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name">lastFm</div>
                </div>
            </div>
            <ul className="nav_list">
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/Home" >
                        <span>Главная</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/TopArtists" >
                        <span>Топ исполнители</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/TopTracks" >
                        <span>Топ треки</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/Albums" >
                        <span>Альбомы</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/2" >
                        <span>#######</span>
                    </NavLink>
                </li>
            </ul>
            <div className="search-wrapper">search</div>
        </div>
    );
}

export default Header;