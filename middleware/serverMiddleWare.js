const app= require("../app");
//body parser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//routes
app.use("/", require("../routes/index"));