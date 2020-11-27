const argv = process.argv
const express = require("express")
const app = express();

app.listen(argv[2], function() {
    console.log(
      "Server is listening on http://localhost:"+argv[2]
    );
  });