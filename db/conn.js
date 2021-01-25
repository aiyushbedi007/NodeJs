const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/onlinebooking-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is succsessfully.....");
}).catch((e)=>{
    console.log("no connection");
})