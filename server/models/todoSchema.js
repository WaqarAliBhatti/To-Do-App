const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    task:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean
    }
})

const createTodo=new mongoose.model('TodoCollection',todoSchema);
module.exports=createTodo;