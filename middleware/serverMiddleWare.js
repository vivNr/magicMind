const app= require("../app");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", require("../routes/index"));