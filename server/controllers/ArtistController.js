const lastfm = require('../models/lastfm.js');

exports.getTopArtists = function(req,res) {
    let page = req.query.page;
    let limit = req.query.limit;
    lastfm.getTopArtists((limit), (page), function(result, err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
    
}

exports.getArtist = function (req,res) {
    let artistName = req.params["artistName"];
    let lang = req.query.lang;
    artistName = artistName.replace("_", " ");

    lastfm.getArtist((artistName),(lang), function (result,err) {
        if (err) {
            console.log(err);
            res.sendstatus(500);
        }
        res.send(result);
    })
}
