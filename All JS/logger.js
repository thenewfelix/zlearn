
const EventEmitter = require('events');
const emitter = new EventEmitter();
var url = 'http://logger.io/log';

function log(message){
	//Send an http request
	console.log(message);

	//to Raise an event
	emitter.emit('Logging', { id: 1, data: 'message'});
}

module.exports.log = log;