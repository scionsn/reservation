const express=require("express")
const loginroute=express.Router()
const crud=require("../db/helpers/logincrud")
loginroute.get("/logininfo",(req,res)=>{
    res.set({'content-type':'application/json'});
crud.find().
then(data=>{
    res.json(data)
}).
catch(err=>{
    res.json({error:err})
})
})
loginroute.get("/userlogin",(req,res)=>{
    res.set({'content-type':'application/json'});
   console.log(req.body)
crud.findone({
    username:req.body.username,
    pwd:req.body.pwd
}).
then(data=>{
    console.log("data is ",data)

    res.json(data)
}).
catch(err=>{
    console.log('err')
    res.json({error:err})
})
})

loginroute.post("/addlogin",(req,res)=>{
    res.set({'content-type':'application/json'});
const obj={
    username:req.body.username,
    pwd:req.body.pwd
}
crud.add(obj).then(doc=>{
    console.log('doc added')
    res.json(doc)
}).catch(err=>{
    console.log('err')
    res.json(err)
})
})
module.exports=loginroute
