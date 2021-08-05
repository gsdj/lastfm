const express = require("express");
const nconf = require('nconf');
const cors = require('cors');
const ArtistController = require("./controllers/ArtistController.js");
const TrackController = require("./controllers/TrackController.js");
const AlbumController = require("./controllers/AlmubController.js");

nconf.argv().env().file({file: './config.json'});
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));
app.use(cors()); 

const ArtistRouter = express.Router();
const TrackRouter = express.Router();
const AlbumRouter = express.Router();

ArtistRouter.get("/topChart", ArtistController.getTopArtists);
ArtistRouter.get("/:artistName", ArtistController.getArtist);

TrackRouter.get("/topChart", TrackController.getTopTracks);
TrackRouter.get("/:trackName/artist/:artistName", TrackController.getTrack);

//AlbumRouter.get("/topChart", TrackController.getTopTracks);
AlbumRouter.get("/:albumName/artist/:artistName", AlbumController.getAlbum);

app.use("/api/artists", ArtistRouter);
app.use("/api/tracks", TrackRouter);
app.use("/api/album", AlbumRouter);


app.listen(nconf.get('server:port'), function() {
    console.log('Express server listening on port ' + nconf.get('server:port'));
});