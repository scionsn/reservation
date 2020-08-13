const express=require("express")
const reserveroute=express.Router()
const crud=require("../db/helpers/reservationcrud")
reserveroute.get("/reserveinfo",(req,res)=>{
    res.set({'content-type':'application/json'});
crud.find().
then(data=>{
    res.json(data)
}).
catch(err=>{
    res.json({error:err})
})
})
reserveroute.post('/addreserve',(req,res)=>{
    res.set({'content-type':'application/json'});
const obj={
    name:req.body.name,
    date:req.body.date,
    time:req.body.time,
    description:req.body.description
}
crud.add(obj).then(doc=>{
    console.log('doc added')
res.json(doc)
}).catch(err=>{
    res.json(err)
    console.log(err)
})

})
reserveroute.route('/update/:id').post((req, res) => {
    crud.findbyid(req.params.id)
      .then(doc => {
        doc.name = req.body.name;
        doc.date = req.body.date;
        doc.time = req.body.time;
        doc.description =req.body.description; 
  
        doc.save()
          .then(() => res.json(' updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  reserveroute.route('/delete/:id').delete((req, res) => {
    crud.delete(req.params.id)
      .then(() => res.json(' deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  reserveroute.route('/:id').get((req, res) => {
    crud.findbyid(req.params.id)
      .then(val => res.json(val))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports=reserveroute