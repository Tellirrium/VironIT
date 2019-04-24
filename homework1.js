'use strict';

function EventEmitor() {
	this.eventTable = {};
}

EventEmitor.prototype.on = function(eventName, handler) {
	if ( !this.eventTable[eventName] ) {
		this.eventTable[eventName] = [];
	}

	this.eventTable[eventName].push(handler);

	return () => this.eventTable[eventName].splice(this.eventTable[eventName].indexOf(handler), 1);
}

EventEmitor.prototype.emit = function(eventName, ...params) {
	const event = this.eventTable[eventName];
	
	if (event) {
		this.eventTable[eventName].forEach( elem =>  elem.apply(null, params) );
	}	
}

const a = new EventEmitor();
a.on('one', (e = 1,m =2, r = 3) => console.log(e,m,r));
const f = a.on('one', () => console.log('world'));
a.on('two', () => console.log('hey'));
a.emit('one');
f();
a.emit('one');