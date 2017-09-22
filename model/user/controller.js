const Controller = require('../../lib/controller');
const userFacade = require('./facade');
const axios 	 = require('axios');
const requestify = require('requestify'); 


axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserController extends Controller {
	// create(req, res, next) {
	// 	// var doc = super.create(req, res, next);
	// 	// console.log(doc)
	// 	var doc
	// 	// requestify.get("https://www.npmjs.com/package/axios").then(r => {
	// 	// 	console.log(r)
	// 	// 	res.send(r)
	// 	// })

	// 	requestify.get("http://localhost:8081").then(r => {
	// 		console.log(r)
	// 		res.send(r)
	// 	})


	// 	requestify.request('http://localhost:8081',{
	// 		method: 'GET',
	// 		// body: {username:'req.body.username', orgName: 'org1'},
	// 		// headers:{
	// 		// 	'Content-Type': 'application/json'
	// 		// }
	// 	})
	// 	.then(function(result) {
	// 		console.log(result);
	// 		// res.status(201).json( result)
	// 	})
		// super.facade.create(req.body).then(_doc => {
  // 			doc = _doc;
  // 			console.log(doc)
		//   	return axios.post('users',{username:req.body.username, orgName: req.body.orgName})
		//   	// return requestify.post('http://localhost:4000/users',{username:req.body.username, orgName: req.body.orgName})
		// }).then(result => {
	 //  		console.log(result)
	 //  		res.status(201).json(Object.assign(doc, result))
	 //  		// res.status(201).json(Object.assign(doc))
	 //  	}).catch(err => next(err));

	// }
}

module.exports = new UserController(userFacade);
