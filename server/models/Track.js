const axios = require('axios');
const nconf = require('nconf');

//let tracks = {};

function getTracksF(par) {
    const result = axios.get('http://ws.audioscrobbler.com/2.0/',{
        proxy: {
            host: 'proxy1.bank',
            port: 3128,
       },
        params: {
            method: 'chart.gettoptracks',
            limit: '18',
            api_key: '5aca9160a4a90186a4129362a81146e2',
            format: 'json',
        }
    });
    let tracks = result.data;
    return tracks;
}

module.exports.getTracks = function () {
    //tracks = getTracksF();
    return getTracksF();
}

