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
	if(event){
		this.eventTable[eventName].forEach( elem =>  elem.apply(null, params) );
	}
	
}

// const a = new EventEmitor();
// a.on('one', (e = 1,m =2, r = 3) => console.log(e,m,r));
// const f = a.on('one', () => console.log('world'));
// a.on('two', () => console.log('hey'));
// a.emit('one');
// f();
// a.emit('one');


function Atm(x, y) {
	EventEmitor.call(this);
	this.x = x;
	this.y = y;
	this.status = 'free';
	this.amount = 0;
}

Atm.prototype = Object.create(EventEmitor.prototype);
Atm.prototype.constructor = Atm;

Atm.prototype.changeProperties = function(eventName, handler) {
	this.amount++;

	switch (this.status) {
		case 'free':
			this.status = 'busy';
			this.on(eventName, handler);
			break;
		case 'busy':
			setTimeout( () => {
				this.status = 'free';
				console.log(this.status);
			}, getRandomInt(this.x,this.y)*1000 );
			break;
	}

	this.emit(eventName);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let client = new Atm(1, 5);
client.changeProperties('artem', () => console.log('Снимает деньги'));
client.changeProperties('artem', () => console.log('Снимает деньги'));

