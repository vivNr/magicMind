const  app = require("./app");
const port = process.env.PORT?process.env.PORT: 3000;
app.listen(port, () => console.log(`magicmind ${port}!`));

require("./middleware/serverMiddleWare");
require('dotenv').config();

app.get('*', function(req, res){
    res.send('not found', 404);
  });

