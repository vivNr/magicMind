const express = require("express");
const app = express();
const port = process.env.PORT?process.env.PORT: 3000;
app.listen(port, () => console.log(`magicmind ${port}!`));
const bodyParser = require("body-parser");
require('dotenv').config()





//middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", require("./routes/index.js"));
app.get('*', function(req, res){
    res.send('not found', 404);
  });


 