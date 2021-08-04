const axios = require('axios').default;
const nconf = require('nconf');
//const art = require('../models/Artist');
//const gret = require('../models/gret.js');

/* exports.getTopArtists = function(req,res) {
    let pageN = req.query.page;
    let perPage = 9;
    let totalPages = 5;
    let totalCount = perPage*totalPages;
    axios.get('http://ws.audioscrobbler.com/2.0/',{
        proxy: {
            host: 'proxy1.bank',
            port: 3128,
       },
        params: {
            method: 'chart.gettopartists',
            limit: perPage,
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
            page: pageN,
        }
    }).then(function (resp) {    
        resp.data.artists["@attr"].totalPages = totalPages.toString();  
        resp.data.artists["@attr"].total = totalCount.toString();  
        res.send(resp.data); 
    }).catch(function (error) {
        console.log(error);
    });
    
} */

exports.getTopArtists = function(req,res) {
    let pageN = req.query.page;
    let perPage = 9;
    let totalPages = 5;
    let totalCount = perPage*totalPages;
    axios.get('http://ws.audioscrobbler.com/2.0/',{
/*         proxy: {
            host: 'proxy1.bank',
            port: 3128,
       }, */
        params: {
            method: 'chart.gettopartists',
            limit: perPage,
            api_key: nconf.get('apiKey:lastfm'),
            format: 'json',
            page: pageN,
        }
    }).then(function (resp) {    
        resp.data.artists["@attr"].totalPages = totalPages.toString();  
        resp.data.artists["@attr"].total = totalCount.toString();  
        res.send(resp.data.artists); 
    }).catch(function (error) {
        console.log(error);
    });
    
}