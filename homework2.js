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


// Create a new class - Atm
function Atm() {
	EventEmitor.call(this);
	this.status = 'free';
	this.countServedPeople = 0;
}

Atm.prototype = Object.create(EventEmitor.prototype);
Atm.prototype.constructor = Atm;

Atm.prototype.busy = function() {
	this.countServedPeople++;
	this.status = 'busy';
	this.emit(this.status);
}

Atm.prototype.free = function() {
	this.status = 'free';
	this.emit(this.status);
}





function Queue () {
	EventEmitor.call(this);
	this.countPeople = 0;
}

Queue.prototype = Object.create(EventEmitor.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.addPerson = function () {
	this.countPeople++;
	this.emit(this.countPeople);
	console.log(`counter ${this.countPeople}`);
}
// вынести генератор из Queue
Queue.prototype.generator = function(n, m) {
	setTimeout( () => {
		this.addPerson();
		this.generator(n, m);
		}, this.rand(n, m) );
}

Queue.prototype.rand = function(n, m) {
	return (Math.floor(Math.random()*(m-n+1)+n))*1000;
}

// вынести метод из Queue
Queue.prototype.queueReduction = function() {
		this.countPeople--;
}




// not ending yet, don't watch please:)
// function AtmManager(Atm1, Atm2, queue) {
// 	this.Atm1 = Atm1;
// 	this.Atm2 = Atm2;
// 	this.queue = queue;
// }

// AtmManager.prototype.reduction = function() {
// 	setInterval( () => {
// 		if (this.Atm1.status == 'busy') {
// 			this.queue.queueReduction();
// 			// this.Atm1.free();
// 		}
// 		if (this.Atm2.status == 'busy') {
// 			this.queue.queueReduction();
// 			// this.Atm2.free();
// 		}
// 		if (this.Atm1.status == 'free') {
// 			this.Atm1.busy();
// 		}
// 		if (this.Atm2.status == 'free') {
// 			this.Atm2.busy();
// 		}
// 	}, queue.rand() ); 
// }


let Atm1 = new Atm;
let Atm2 = new Atm;
let queue = new Queue;
let meneger = new AtmManager(Atm1, Atm2, queue);
// meneger.reduction();
queue.generator(1, 4);





