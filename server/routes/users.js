
var express = require('express');
var router = express.Router();
var user=require('../model/schema');

/* GET users listing. */
router.post('/',(req, res)=> {
 	let title=req.body.title;
	let url=req.body.url;
	let urlToImage=req.body.urlToImage;
	let description=req.body.description;
	let author=req.body.author;

	user.insertMany({
		"title":title,
		"url":url,
		"urlToImage":urlToImage,
		"description":description,
		"author":author
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
