const axios = require('axios');
const nconf = require('nconf');

const url = "http://ws.audioscrobbler.com/2.0/";

/** Tracks */
module.exports.getTopTracks = function (limit = 18,page,result) {
    axios.get(url,{
                 proxy: {
                    host: nconf.get('proxy:host'),
                    port: nconf.get('proxy:port'),
                },
                params: {
                    method: 'chart.gettoptracks',
                    limit: limit,
                    api_key: nconf.get('apiKey:lastfm'),
                    format: 'json',
                    page: page,
                }
            }).then((resp) => {
                result(resp.data,err = null);
            }).catch((err) => {
                result(result = null, err);
            });
}
 
module.exports.getTrack = function (artist, track, result) {
    axios.get(url,{
        proxy: {
            host: nconf.get('proxy:host'),
            port: nconf.get('proxy:port'),
        },
        params: {
            method: 'track.getInfo',
            artist: artist,
            track: track, 
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
        }
    }).then(function (resp) {
        result(resp.data, err = null); 
    }).catch(function (err) {
        result(result = null, err);
    });
}

/**Artists */
module.exports.getTopArtists = function(limit = 9,page,result) {
    let totalPages = 5;
    let totalCount = limit*totalPages;
    axios.get(url,{
        proxy: {
            host: nconf.get('proxy:host'),
            port: nconf.get('proxy:port'),
        },
        params: {
            method: 'chart.gettopartists',
            limit: limit,
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
            page: page,
        }
    }).then(function (resp) {    
        resp.data.artists["@attr"].totalPages = totalPages.toString();  
        resp.data.artists["@attr"].total = totalCount.toString();  
        result(resp.data, err = null); 
    }).catch(function (err) {
        result(result = null, err);
    });
    
}

module.exports.getArtist = function (artist,lang = 'ru',result) {
    axios.get(url,{
        proxy: {
            host: nconf.get('proxy:host'),
            port: nconf.get('proxy:port'),
        },
        params: {
            method: 'artist.getinfo',
            artist: artist,
            lang: lang,
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
        }
    }).then(function (resp) {
        result(resp.data, err = null); 
    }).catch(function (err) {
        result(result = null, err);
    });
    
}

/**Album */
module.exports.getAlbum = function (artist, album, lang = 'ru',result) {
    axios.get(url,{
        proxy: {
            host: nconf.get('proxy:host'),
            port: nconf.get('proxy:port'),
        },
        params: {
            method: 'album.getinfo',
            artist: artist,
            album: album,
            lang: lang,
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
        }
    }).then(function (resp) {
        console.log(resp.data);
        console.log(resp.status);
        console.log(resp.statusText);
        console.log(resp.headers);
        console.log(resp.config);


        result(resp.data, err = null); 
    }).catch(function (err) {
        Errors(err.response.data);
        if (err.response) {
            console.log('error.response.data: ' + err.response.data);
            console.log('error.response.status: ' + err.response.status);
            console.log('error.response.headers: ' + err.response.headers);
        } else if (err.request) {
            console.log('error.response.request: ' + err.request);
        } else {
            console.log('err.message: ', err.message);
        }
        console.log('err.config: ' + err.config);
        console.log(err.response.data.message);
        result(result = null, err);
    });
}

/**Errors */
function Errors(params) {
    switch (params.error) {
        case 6:
            console.log('нет такого')
            break;
    
        default:
            console.log('хз')
            break;
    }
}
 