const todoRepo = require("../repositories/user.js");


exports.viewTodo = async () => {
    user = await todoRepo.find();
    return user;
  };
  
  exports.createTodo= async (payload)=>{
    let task;
    const createPayload={
      task:payload.task
    };
    user= await todoRepo.create(createPayload);
    console.log(user);
    return{
      task:user.task,
      success:true
    };
  }