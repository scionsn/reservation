var express=require("express");
var cors=require("cors");
var app=express();
var bodyparser=require("body-parser");
const reserveroute = require("./routes/reservation");
const loginroute = require("./routes/login");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/reserve",reserveroute)
app.use("/login",loginroute)
if(process.env.NODE_ENV==='production'){
  app.use(express.static('../build'))
}
var port=process.env.PORT||3002;
app.listen(port,()=>{
    console.log("server started on",port);
})