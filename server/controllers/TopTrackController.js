const track = require('../models/Track.js');

exports.getTracks = function(req,res) {
    track.getTracks(("3"), ("2"), function(result, err) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    })
}
