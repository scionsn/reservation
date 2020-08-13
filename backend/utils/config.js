const config={
    url:process.env.MONGODB_URI||"mongodb+srv://scion:reservation@reservation.kpqjm.mongodb.net/reservation?retryWrites=true&w=majority",

// url: "mongodb://localhost:27017/coronabm",
poolsize:10

}
module.exports=config;