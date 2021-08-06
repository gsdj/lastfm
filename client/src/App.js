import '../src/App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <div className="tools-wrapper">
          <div className="artists-wrapper">
            <div>Топ артистов</div>
            <div>
              <input type="button" value="3"></input>
              <input type="button" value="6"></input>
              <input type="button" value="9"></input>
            </div>
          </div>
          <div className="tracks-wrapper">
            <div>Топ треков</div>
            <div>
              <input type="button" value="6"></input>
              <input type="button" value="12"></input>
              <input type="button" value="18"></input>
            </div>
          </div>
          <div className="search-wrapper">
            <div className="search">
              <input className="search-input" type="text"></input>
              <input className="search-btn" type="button" value="найти"></input>
            </div>
            <div className="">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
