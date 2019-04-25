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
	constructor(x, y) {
		super();
		this.status = 'free';
		this.countServedPeople = 0;
		this.x = x;
		this.y = y;
	}
	busy() {
		this.countServedPeople++;
		this.status = 'busy';
		this.emit('status', this.status);
		console.log('atm is busy');
	}
	free() {
		this.status = 'free';
		this.emit('status', this.status);
		console.log('atm is free');
	}
	rand() {
		return (Math.floor(Math.random() * (this.y - this.x + 1) + this.x));
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
		this.atm = new Atm(2000, 6000);
		this.queue = new Queue;
	}
	addPerson() {
		this.queue.countPeople++;
		this.emit('queueCount', this.queue.countPeople);
		console.log(`counter ${this.queue.countPeople}`);
	}
	generator(n, m) {
		setTimeout(() => {
			this.addPerson();
			this.generator(n, m);
		}, this.rand(n, m));
	}
	rand(n, m) {
		return (Math.floor(Math.random() * (m - n + 1) + n)) * 1000;
	}
	queueReduction() {
		if (this.queue.countPeople != 0) {
		this.queue.countPeople--;
		}
		this.emit('queueCount', this.queue.countPeople);
		// console.log(`counter ${this.queue.countPeople}`);
	}
	start = () => {
		this.on('queueCount', () => {
		while (this.atm.status == 'free' && this.queue.countPeople >= 0 ) {
				this.atm.busy();
				this.queueReduction();
				let promise = new Promise((resolve) => setTimeout(() => {
					this.atm.free();
					return resolve();
				}, this.atm.rand()));
				promise.then(() => setTimeout(() => this.start(), 1000));
		}
	}); 

// 		if (this.atm.status == 'free' && this.queue.countPeople >= 0 ) {
// 				this.atm.busy();
// 				this.queueReduction();
// 				let promise = new Promise((resolve) => setTimeout(() => {
// 					this.atm.free();
// 					return resolve();
// 				}, this.atm.rand()));
// 				promise.then(() => setTimeout(() => this.start(), 1000));
// 		}
// }
// }
	}
}


let app = new App;
app.generator(1, 2);
app.start();





