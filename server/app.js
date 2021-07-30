const express = require("express");
const cors = require('cors');
const TopArtistController = require("./controllers/TopArtistController");

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

app.use(cors()); 



const TopArtistRouter = express.Router();

/* TodoListRouter.get("/", TodoListController.getList);
TodoListRouter.get("/:id", TodoListController.getTodo);
TodoListRouter.post("/create", jsonParser, TodoListController.addTodo);
TodoListRouter.delete("/:id", TodoListController.delTodo);
TodoListRouter.put("/update", jsonParser, TodoListController.updateTodo); */

TopArtistRouter.get("/", TopArtistController.getTopArtists);

app.use("/api/TopArtists", TopArtistRouter);



app.listen(3001, function() {
    console.log('Express server listening on port 3001');
});