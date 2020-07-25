//create server start
const  app = require("./app");
const port = process.env.PORT?process.env.PORT: 3000;
app.listen(port, () => console.log(`magicmind ${port}!`));
//create server end

//env config start
require('dotenv').config();
//env config end



//middleware start
require("./middleware/serverMiddleWare");
//middleware end


//All other routes should be redirected to 404 start
app.get('*', function(req, res){
    res.send('not found', 404);
  });

//All other routes should be redirected to 404 end