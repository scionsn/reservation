const connection=require("../../utils/connection")
var schema=connection.Schema;
var reservationschema=new schema({
name:{required:true,type:String},
date:{required:true,type:String},
time:{required:true,type:String},
description:{required:true,type:String}
})

const reservationcollection=connection.model("reservation",reservationschema)
module.exports=reservationcollection