import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import '../App.css';

function Home(props) {
    const [artists, setArtists] = useState({artist: [], "@attr": {}});
    const [tracks, setTracks] = useState({track: [], "@attr": {}});
    const [limitArtists, setLimitArtists] = useState("3");
    const [limitTracks, setLimitTracks] = useState(6);
  
    useEffect(() => {
      const fetchArtist = async () => {
        const result = await axios(
          `http://localhost:3001/api/artists/topChart?limit=${limitArtists}`,
        );
        setArtists(result.data.artists);
      };
      fetchArtist();
      const fetchTracks = async () => {
        const result = await axios(
          `http://localhost:3001/api/tracks/topChart?limit=${limitTracks}`,
        );
        setTracks(result.data.tracks);
      };
      fetchTracks();

    }, [limitArtists,limitTracks]);

    const rednerArtists = function () {
        if (artists.length !== 0) {
            return(
                artists.artist.map(item => (
                    <tr key={shortid.generate()}>
                        <td>
                            <img src={item.image[1]["#text"]} alt="img"></img>
                        </td>
                        <td>{item.name}</td>
                    </tr>
                ))                    
            )
        }
    }

    const renderTracks = function () {
        if (tracks.length !== 0) {
            return(
                tracks.track.map(item => (
                    <tr key={shortid.generate()}>
                        <td>
                            <img src={item.image[1]["#text"]} alt="img"></img>
                        </td>
                        <td>
                            <div>
                                <div><span>{item.artist.name}</span></div>
                                <div><span>{item.name}</span></div>
                            </div>
                            </td>
                    </tr>
                ))                    
            )
        }
    }

    return(
        <div className="home-wrapper">
            <div className="artists-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">
                                <div>
                                    <div>
                                        <span>Топ артисты / </span>
                                    </div>
                                    <div>
                                        <ul className="top-list">
                                            <li><button type="button" onClick={(e) => setLimitArtists(3)}>3</button></li>
                                            <li><button type="button" onClick={(e) => setLimitArtists(6)}>6</button></li>
                                            <li><button type="button" onClick={(e) => setLimitArtists(9)}>9</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rednerArtists()}
                    </tbody>
                </table>
            </div>
            <div className="tracks-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">
                                <div>
                                    <div>
                                        <span>Топ треки / </span>
                                    </div>
                                    <div>
                                        <ul className="top-list">
                                        <li><button type="button" onClick={(e) => setLimitTracks(6)}>6</button></li>
                                            <li><button type="button" onClick={(e) => setLimitTracks(12)}>12</button></li>
                                            <li><button type="button" onClick={(e) => setLimitTracks(18)}>18</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTracks()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;