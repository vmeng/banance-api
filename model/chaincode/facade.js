const Facade = require('../../lib/facade');
const chaincodeSchema = require('./schema');

class ChaincodeFacade extends Facade {}

module.exports = new ChaincodeFacade(chaincodeSchema);
