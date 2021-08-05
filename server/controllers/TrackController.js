const lastfm = require('../models/lastfm.js');

exports.getTopTracks = function(req,res) {
    let page = req.query.page;
    let limit = req.query.limit;
    lastfm.getTopTracks((limit), (page), function(result, err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
}

exports.getTrack = function(req,res) {
    let artistName = req.params["artistName"];
    let trackName = req.params["trackName"];

    artistName = artistName.replace("_", " ");
    trackName = trackName.replace("_", " ");

    lastfm.getTrack((artistName), (trackName), function(result, err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
}
