const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const pet = require('./model/pet/router');
const chaincode = require('./model/chaincode/router');

// const requestify = require('requestify');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to  API!' });
});

router.use('/user', user);
router.use('/pet', pet);
router.use('/chaincode', chaincode);

const requestify = require('requestify');
router.use('/test', function(req,res,next){
	// res.send('ok');
	requestify.get("http://localhost:4000").then(r => {
			console.log(r)
			res.send(r)
		})

})
module.exports = router;
