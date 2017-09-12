var express = require('express');
var router = express.Router();
var model=require('../model/schema');

/* GET home page. */
router.get('/',(req, res)=> {
  model.find(function(err,data){
    if(err){
      /*console.log(err);*/
      res.send(err);
    }
    else
    {
  
      res.json({model:data});
    }
  })
})

module.exports = router;
