const argv = process.argv
const express = require("express")
const app = express();
const pokedex = require("./routes/pokedex.json")

app.listen(argv[2], function() {
    console.log(
      "Server is listening on http://localhost:"+argv[2]
    );
  });

  app.get("/", (req, res) => {
    return res.json()
  });

  app.get("/pokedex", (req, res) => {
    return res.json(require('./routes/pokedex.json'))
  });