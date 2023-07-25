const todoModel=require('../models/tosoSchema')

exports.find=async(payload)=>{
    return todoModel.find({})
    
  }

  exports.create=async(payload)=>{
    return todoModel.create(payload);
  }