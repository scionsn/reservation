const mongoose=require("mongoose");
const config=require("./config");
mongoose.connect(config.url,{poolSize:config.poolsize},err=>{
    if(err){
        console.log("error occured in connection due to ",err)
    }
    else{
        console.log("connection success");
    }
})
module.exports=mongoose;