const argv = process.argv
const express = require("express")
const app = express();
const pokedex = require('./routes/pokedex.json')

app.listen(argv[2], function() {
    console.log(
      "Server is listening on http://localhost:"+argv[2]
    );
  });

  app.get("/", (req, res) => {
    return res.json()
  });

  app.get("/pokemons", (req, res) => {
    return res.json(require('./routes/pokedex.json'))
  });

  app.get("/pokemons/:id", (req, res) => {
    const search = pokedex.find(c => c.id == parseInt(req.params.id))
    if(!search) {
      return (res.status(404).send("Le pokemon que vous cherché n'exixte pas dans le pokédex"))
    }
    else {
      res.send(search)
    }
})