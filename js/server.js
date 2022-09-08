const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.static(path.join(__dirname,'..','index.html'));
});

//add the router
app.set('port',process.env.port )
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');