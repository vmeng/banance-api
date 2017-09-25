const Controller = require('../../lib/controller');
const chaincodeFacade = require('./facade');

class ChaincodeController extends Controller {}

module.exports = new ChaincodeController(chaincodeFacade);
