const { catchAsync } = require('../helpers/request');
const service = require('../services/user.js')

exports.todos = catchAsync(async (req, res, next) => {

    res.body = await service.viewTodo();
    res.json(res.body);
  });
  
exports.addTodos= catchAsync(async(req,res,next)=>{
    const payload ={
      task:req.body.task
    };
    res.body=await service.createTodo(payload);
    return res.json(res.body)
})