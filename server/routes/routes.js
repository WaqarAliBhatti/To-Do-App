const express=require('express');
const router=express.Router()
const controller=require('../controllers/user.js')



router.get('/showtodos',controller.todos);
router.post('/addtodo',controller.addTodos)

module.exports= router;