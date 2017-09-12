let mongoose=require('mongoose');
let bcrypt = require('bcrypt');

mongoose.set('debug',true);
let Schema=mongoose.Schema;
let MainSchema=new Schema({
	title:{ type: String, unique:true },
	url:{ type: String, required: true },
	urlToImage:{ type: String, required: true },
	description:{type: String, required:true},
	author:{type: String, required:true}
},{collection:"newsdaily",versionKey:false});

let model=mongoose.model('newsdaily',MainSchema);

module.exports=model;