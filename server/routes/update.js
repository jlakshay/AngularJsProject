var express = require('express');
var router = express.Router();
var model=require('../model/schema');
router.put('/:empcode', function (req, res) {
	model.update({'empcode':req.params.empcode},
		{$set:{name:req.body.name,empcode:req.body.empcode,age:req.body.age,salary:req.body.salary}},function(err,data){
			if(err)
			{
				
				res.send(err);
			}
			else
			{
			
			res.json({model:data});
			}
		})
})

module.exports = router;