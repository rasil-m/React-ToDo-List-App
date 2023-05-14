var express=require("express");
var cors = require('cors');
var app=express();
app.use(cors());
app.listen(process.env.PORT || 8081);


module.exports={app}