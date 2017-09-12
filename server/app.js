let http =require ('http');
let express =require ('express');
let bodyParser = require('body-parser');
const app=express();
let config=require('./config/config');
let mongoose =require ('mongoose');
let fs = require('fs');
let morgan = require('morgan')
let path = require('path');
let cors=require('cors');
let passport = require('passport');  
let jwt = require('jsonwebtoken');  
let User = require('./model/registerSchema');  

let index = require('./routes/index');
let users = require('./routes/users');
let update = require('./routes/update');
let empdelete = require('./routes/delete');
let registerUser= require('./routes/register');
let userLogin= require('./routes/login');

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


app.use(bodyParser.json()); /*/Allow to parse through the elements of json and*/
app.use(bodyParser.urlencoded({ extended: false })); /*Use body Parser to post request for API use*/

app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('dev')); /*Logs requests to console*/

app.use(passport.initialize())/*Initialize Passport for use*/
/*Bring in the passport strategy we just defined*/
require('./config/passport')(passport);

/*create api group routes*/
let apiRoutes=express.Router();

//Register new news
apiRoutes.post('/register', function(req, res) {  
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    var newUser = new User({
      name:	req.body.name,	
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
});

// Authenticate the user and get a JSON Web Token to include in the header of future requests.
apiRoutes.post('/authenticate', function(req, res) {  
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
         var token = jwt.sign({ id:req.body.id, email:req.body.email }, config.secret, {
            expiresIn: 20000
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

// Protect dashboard route with JWT
apiRoutes.get('/login',passport.authenticate('jwt',{session:false}),
	function(req,res){
		res.send('It worked!! Id is: '+ req.user.email);
	});

// Set url for API group routes
app.use('/api', apiRoutes);  

app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/update', update);
app.use('/delete', empdelete);
app.use('/register',registerUser);
app.use('/login',userLogin);

/*Connect to db*/
mongoose.connect(config.db)
mongoose.connection.on('connected',function(){
	console.log("Connected Successfully");
})
/*
app.get('/',(req, res)=> {
  model.find(function(err,data){
  	if(err){
  		console.log(err);
  		res.send(err);
  	}
  	else
  	{
  		console.log(data);
  		res.json({model:data});
  	}
  })
})

app.post('/',(req, res)=> {
 	let name=req.body.name;
	let empcode=req.body.empcode;
	let salary=req.body.salary;
	let age=req.body.age;

	model.insertMany({
		"name":name,
		"empcode":empcode,
		"age":salary,
		"salary":age
	}, (err,user)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
			res.json({model:user});
		}
	})
})

app.put('/:empcode', function (req, res) {
	model.update({'empcode':req.params.empcode},
		{$set:{name:req.body.name,empcode:req.body.empcode,age:req.body.age,salary:req.body.salary}},function(err,data){
			if(err)
			{
				console.log(err);
				res.send(err);
			}
			else
			{
			console.log(data);
			res.json({model:data});
			}
		})
})

app.delete('/:empcode', (req, res)=>{
  model.findOneAndRemove({'empcode':req.params.empcode},
		(err,data)=>{
			if(err)
			{
				console.log(err);
				res.send(err);
			}
			else
			{
			console.log(data);
			res.status(204);
			}
		})
})*/


app.listen(3005, function () {
  console.log('Example app listening on port 3000!');
})
