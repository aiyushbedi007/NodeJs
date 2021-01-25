const mongoose=require("mongoose");
const validator=require("validator");

//create schema for student
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:4
    },
    lastName:{
        type:String,
        required:true,
        minlength:4
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is already Exsist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")

            }
        }
    },
    passwoord:{
        type:String,
        required:true,
        minlength:4

    },
    confirmPassword:{
        type:String,
        required:true,
        minlength:4,
        validate(value){
            if(!validator.passwoord(value)){
                throw new Error("password not matched with entered password")
            }

        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
   

})

//we will create a new collection
const User = mongoose.model("User", userSchema);
module.exports = User;