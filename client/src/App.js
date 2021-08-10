import '../src/App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home.js';
import TopArtists from './components/TopArtists.js';
import TopTracks from './components/TopTracks.js';
import Albums from './components/Albums.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
            <Route path='/Home' component={Home}  />
            <Route path='/TopArtists' component={TopArtists} />
            <Route path='/TopTracks' component={TopTracks} />
            <Route path='/Albums' component={Albums} />
            <Redirect to='/Home' />
        </Switch>    
      </div>
    </div>
  );
}

export default App;
