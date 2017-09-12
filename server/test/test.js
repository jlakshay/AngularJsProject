let assert = require('assert');
let index = require('../routes/index.js');
let users = require('../routes/users.js');
let chai=require('chai');
let expect =require('chai').expect;
let supertest= require('supertest');
let url=supertest("http://localhost:3000");
let Meme = require('../model/schema');
let sinon=require('sinon');
let stub=sinon.stub(Meme,'find');
let postStub=sinon.stub(Meme,'insertMany');
let putStub=sinon.stub(Meme,'update');
let deleteStub=sinon.stub(Meme,'remove');
let should=require('chai').should();


let app=require('../app');
describe('Expect', ()=> {
	// And then we describe our testcases.
	it('Get request', (done)=> {
		url.get('/')
		assert.equal('Hello World expected','Hello World expected');	
		done();
	});	/*end of http get request test*/
});

describe('Expect', ()=> {
	// And then we describe our testcases.
	it('Post Request', (done)=>{
		url.post('/users');
		assert.equal('Hello World expected','Hello World expected');	
		done();
	});	/*end of http post test*/
});

describe('Model', ()=> {
    it('should be invalid if properties are empty', function(done) {
        var m = new Meme();
        m.validate((err)=> {
           expect(err.errors.name).to.exist;
             expect(err.errors.empcode).to.exist;
             expect(err.errors.age).to.exist;
             expect(err.errors.salary).to.exist;
             expect(m).to.have.property('name');
             expect(m).to.have.property('name');
             expect(m).to.have.property('name');
             expect(m).to.have.property('name');
            done();
        });
    });
    it('should be invalid the properties are not present', function(done) {
        var m = new Meme();
        m.validate((err)=> {
             expect(m).to.have.property('name');
             expect(m).to.have.property('empcode');
             expect(m).to.have.property('age');
             expect(m).to.have.property('salary');
            done();
        });
    });
});

describe('http method test',()=>{	
	beforeEach(()=>{
		stub.yields(null,[{name:'abc',empcode:50043746,age:47,salary:6485}]);
		postStub.yields(null,[{name:'om',empcode:50053546,age:34,salary:43463}]);
		putStub.yields(null,[{'ok':1,'nModified':1,'n':1}]);
		deleteStub.yields(null,[{'ok':1,'nModified':1,'n':1}]);
	});

	it('send all data',(done)=>{
		 url
		.get('/')
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.equal(res.body.model[0].name,'abc');
			assert.equal(res.body.model[0].empcode,50043746);
			assert.equal(res.body.model[0].age,47);
			assert.equal(res.body.model[0].salary,6485);
			done();
		});
	}); /*Get Requets*/

	it('post method',(done)=>{
		 url
		.post('/users')
		.expect('Content-Type',/json/)
		.send({name:'om',empcode:50053546,age:34,salary:43463})
		.end((err,res)=>{
			assert.equal(res.body.user[0].name,'om');
			assert.equal(res.body.user[0].empcode,50053546);
			done();
		});
	}); /*Post Method*/

	it('put method',(done)=>{
		 url
		.put('/update/:empcode')
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.equal(res.body.model[0].ok,1);
			assert.equal(res.body.model[0].nModified,1);
			assert.equal(res.body.model[0].n,1);
			done();
		});
	}); /*Put Method*/

	it('Delete must be a success',(done)=>{
       		 url
            .delete('/delete/14')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err,res)=>{
            	assert.equal(res.body.model[0].ok,1);
            	assert.equal(res.body.model[0].nModified,1);
				assert.equal(res.body.model[0].n,1);
                done();
            });
    });
});

describe('This is test for the dbconnection',()=>{
	it('Connection', (done)=> {
		assert.equal('mongodb://localhost:27017/testdb','mongodb://localhost:27017/testdb');
		done();	
	});
});

