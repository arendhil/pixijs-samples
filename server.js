const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.set('port', (process.env.PORT || 3000));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/externals', express.static(__dirname + '/externals'));
app.use('/', express.static(__dirname + '/public'));
//add the router
app.use('/', router);
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})