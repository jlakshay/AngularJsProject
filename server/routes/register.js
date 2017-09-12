var express = require('express');
var router = express.Router();
var user=require('../model/registerSchema');

/* GET users listing. */
router.post('/',(req, res)=> {
 	let name=req.body.name;
	let email=req.body.email;
	let password=req.body.password;
	let contact=req.body.contact;
	
	user.insertMany({
		"name":name,
		"email":email,
		"password":password,
		"contact":contact
	}, (err,data)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
			res.json({user:data});
		}
	})
})





module.exports = router;
