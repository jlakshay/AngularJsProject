let express = require('express');
let router = express.Router();
let model=require('../model/schema');
router.delete('/:id', (req, res)=>{
  model.remove({'_id':req.params.id},
		(err,data)=>{
			if(err)
			{
				console.log(err);
				res.send(err);
			}
			else
			{
			res.status(204);
			res.json({model:data});
			}
		})
})
module.exports = router;