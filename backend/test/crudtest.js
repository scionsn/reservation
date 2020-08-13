const  logincrud=require("../db/helpers/logincrud")
const reservcrud=require("../db/helpers/reservationcrud")

async function insert(){
    try{
var rec1=await logincrud.add({username:"santa",pwd:"santa"})
var rec2=await logincrud.add({username:"sahil ",pwd:"sahil"})
var rec3=await reservcrud.add({name:"santa ",date:"11.8.2020",time:"11 am",description:"salon appoint"})
logincrud.find();
reservcrud.find();



console.log("records added in db ",rec1,rec2,rec3);
    }
    catch(e){
        console.log("error in insert ",e)
    }
}
insert();
