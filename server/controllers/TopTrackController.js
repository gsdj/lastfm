const gret = require('../models/gret.js');
const track = require('../models/Track.js');
const axios = require('axios');

exports.grett = function (req,res) {
    console.log(gret.message);
    console.log(gret.getMessage(" asdasd"));
    res.send("asd");
}

exports.getTracks = function(req,res) {
    let data = track.getTracks();
    res.send(data);
}

exports.getTracks2 = function (req,res) {
    axios.get('http://ws.audioscrobbler.com/2.0/',{
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
    }).then(function (resp) { 
        res.send(resp.data); 
    }).catch(function (error) {
        console.log(error);
    });
}