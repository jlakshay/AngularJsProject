var express= require('express');
var router = express.Router();
var user= require('../model/registerSchema');

/* GET home page. */
router.get('/:email',(req, res)=> {
    user.find({email: req.params.email},(err,data)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(data);
            res.json(data);
        }
    })

});

module.exports = router;