const Controller = require('../../lib/controller');
const userFacade = require('./facade');
const axios 	 = require('axios');
const requestify = require('requestify'); 


axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserController extends Controller {
	create(req, res, next) {
		var doc;
		super.create(req, res, next)
		.then(_doc => {
			doc = _doc;
			return axios.post('users', {username:req.body.username, orgName: req.body.orgName})
		}).then(result => {
			// console.log('----')
	  // 		console.log(result.data)
	  // 		console.log('----')
	  		res.json(Object.assign({}, doc, result.data))
	  		// res.status(201).json(Object.assign(doc))
	  	}).catch(err => next(err));
	}
}
module.exports = new UserController(userFacade);
