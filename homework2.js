class EventEmitor {
	constructor() {
		this.eventTable = {};
	}
	on(eventName, handler) {
		if (!this.eventTable[eventName]) {
			this.eventTable[eventName] = [];
		}
		this.eventTable[eventName].push(handler);
		return () => this.eventTable[eventName].splice(this.eventTable[eventName].indexOf(handler), 1);
	}
	emit(eventName, ...params) {
		const event = this.eventTable[eventName];
		if (event) {
			this.eventTable[eventName].forEach(elem => elem.apply(null, params));
		}
	}
}




// Create a new class - Atm
class Atm extends EventEmitor {
	constructor() {
		super();
		this.status = 'free';
		this.countServedPeople = 0;
	}
	busy() {
		this.countServedPeople++;
		this.status = 'busy';
		this.emit(this.status);
	}
	free() {
		this.status = 'free';
		this.emit(this.status);
	}
}





class Queue extends EventEmitor {
	constructor() {
		super();
		this.countPeople = 0;
	}
}



class App extends EventEmitor {
	constructor() {
		super();
		this.atm = new Atm;
		this.queue = new Queue;
	}
	addPerson() {
		this.queue.countPeople++;
		this.emit('queueCount', this.queue.countPeople);
		console.log(`counter ${this.queue.countPeople}`);
	}
	generator(n, m) {
		setTimeout( () => {
			this.addPerson();
			this.generator(n, m);
		}, this.rand(n, m));
	}
	rand(n, m) {
		return (Math.floor(Math.random() * (m - n + 1) + n)) * 1000;
	}
	queueReduction() {
		this.queue.countPeople--;
		this.emit('queueCount', this.queue.countPeople);
	}
	start() {
		this.atm.on('status', () => {
			this.atm.working();
			this.queueReduction();
		});
		
	}
}








let Atm1 = new Atm;
let Atm2 = new Atm;
let queue = new Queue;
// meneger.reduction();
queue.generator(1, 4);





