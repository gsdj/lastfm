const express = require("express");
const nconf = require('nconf');
const cors = require('cors');
const TopArtistController = require("./controllers/TopArtistController");
const TopTrackController = require("./controllers/TopTrackController");

nconf.argv().env().file({file: './config.json'});
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));
app.use(cors()); 

const TopArtistRouter = express.Router();
const TopTrackRouter = express.Router();

/* TodoListRouter.get("/", TodoListController.getList);
TodoListRouter.get("/:id", TodoListController.getTodo);
TodoListRouter.post("/create", jsonParser, TodoListController.addTodo);
TodoListRouter.delete("/:id", TodoListController.delTodo);
TodoListRouter.put("/update", jsonParser, TodoListController.updateTodo); */

TopArtistRouter.get("/", TopArtistController.getTopArtists);
TopTrackRouter.get("/", TopTrackController.getTracks);
//TopTrackRouter.get("/", TopTrackController.getTracks2);
/* TopTrackRouter.get("/", TopTrackController.grett);
TopTrackRouter.get("/tracks", TopTrackController.getTracks); */

app.use("/api/TopArtists", TopArtistRouter);
app.use("/api/TopTracks", TopTrackRouter);


app.listen(nconf.get('server:port'), function() {
    console.log('Express server listening on port ' + nconf.get('server:port'));
});