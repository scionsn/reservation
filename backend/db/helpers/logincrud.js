const logincollection=require("../models/logindetails")
const loginoperations={
    add(record){
var promise=logincollection.create(record);
return promise;
    },
    find(){
        var pr=logincollection.find();
        return pr;
    },
    findone(record){
        var pr=logincollection.findOne(record);
        return pr;
    }
}
module.exports=loginoperations