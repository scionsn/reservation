const connection=require("../../utils/connection")
var schema=connection.Schema;
var loginschema=new schema({
username:{required:true,type:String},
pwd:{required:true,type:String}
})

const logincollection=connection.model("login",loginschema)
module.exports=logincollection