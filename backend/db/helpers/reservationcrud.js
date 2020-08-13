const reservationcollection=require("../models/reservationdetails")
const reservationoperations={
    add(record){
var promise=reservationcollection.create(record);
return promise;
    },
    find(){
        var pr=reservationcollection.find();
        return pr;
    },
    findone(record){
        var pr=reservationcollection.findOne(record);
        return pr;
    },
    update(record){
        console.log(record)
       
       var pr= reservationcollection.findOneAndUpdate(record)
        // var rec=new exercisecollection(record)
        // var pr=rec.save();
        return pr;
    },
    delete(id){
        var pr=reservationcollection.findByIdAndDelete(id)
        return pr;
    },
    findbyid(id){
        var pr=reservationcollection.findById(id)
        return pr;
    }
}
module.exports=reservationoperations