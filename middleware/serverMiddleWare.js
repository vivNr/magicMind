const app= require("../app");
//body parser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//routes
app.use("/", require("../routes/index"));
app.use("/test1", require("../routes/test1Route"));
app.use("/test1", require("../routes/test2Route"));
