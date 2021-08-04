import '../src/App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import shortid from 'shortid';

function Artists(props) {
    const [data, setData] = useState({artist: [], "@attr": {}});
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://localhost:3001/api/TopArtists?page=${page}`,
        );
        setData(result.data.artists);
      };
      fetchData();
    }, [page]);

    const renderList = function() {
        if (data.length !== 0) {
            return(
                data.artist.map(item => (
                    <tr key={shortid.generate()}>
                        <td>{item.name}</td>
                        <td>{item.playcount}</td>
                        <td>{item.listeners}</td>
                        <td><a href={item.url}>ссылка</a></td>
                        <td>{item.streamable}</td>
                    </tr>
                ))
            )
        } else {
            return(
                <tr>
                    <td colSpan="3">Нет данных</td>
                </tr>
            )
        }
    }

    const PageList = function (props) {
        let items = [];
        //let pageCount = Number(data['@attr'].totalPages);
        let pageCount = props.pageCount;
        for (let i = 1; i < pageCount + 1; i++) {
            items.push(
                <button key={i} onClick={(e) => setPage(i)}>{i}</button>
            );
        }
        return <div>{items}</div>
    }

    return(
        <div>
            <table className="App-table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>playcount</th>
                        <th>listeners</th>
                        <th>url</th>
                        <th>streamable</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
            <PageList pageCount={Number(data['@attr'].totalPages)} />
        </div>
    )
}

export default Artists;