import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

function Sidebar(props) {
    return(
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name">lastFm</div>
                </div>
            </div>
            <ul className="nav_list">
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/" >
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
                    <NavLink activeClassName="active_link" className="link" to="/#1" >
                        <span>#######</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active_link" className="link" to="/#2" >
                        <span>#######</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

