const lastfm = require('../models/lastfm.js');

exports.getAlbum = function(req,res) {
    let artistName = req.params["artistName"];
    let albumName = req.params["albumName"];
    let lang = req.query.lang;

    artistName = artistName.replace("_", " ");
    albumName = albumName.replace("_", " ");

    lastfm.getAlbum(artistName, albumName, lang, function(result, err) {
        if (err) {
            //console.log(err);
            //return res.sendStatus(500);
            return res.send(err.response.data.message);
        }
        res.send(result);
    });
}
