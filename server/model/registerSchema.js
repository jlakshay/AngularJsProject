let mongoose = require('mongoose');
mongoose.set('debug',true);
let bcrypt =require('bcrypt');

let registerSchema= mongoose.Schema;
let MainSchemaReg= new registerSchema({
	name:{ type: String, required: true },
	email:{ type: String, required: true },
	password:{ type: String, required: true },	
	contact:{ type: String, required: true }
},{collection:"registeration",versionKey:false});

// Saves the user's password hashed (plain text password storage is not good)
MainSchemaReg.pre('save', function (next) {  
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
MainSchemaReg.methods.comparePassword = function(pw, cb) {  
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

let modelRegister=mongoose.model('registeration',MainSchemaReg);

module.exports=modelRegister;
