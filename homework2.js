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


class Logger {
	viewQueue(count) {
		console.log(`counter ${count}`);
	}
	atmFree() {
		console.log('Atm is free');
	}
	atmBusy() {
		console.log('Atm is busy');
	}
}

class Atm extends EventEmitor {
	constructor(x, y) {
		super();
		this.status = 'free';
		this.countServedPeople = 0;
		this.x = x;
		this.y = y;
	}
	getStatus() {
		return this.status;
	}
	busy() {
		this.countServedPeople++;
		this.status = 'busy';
		this.emit('busy', this.status);
		// setTimeout( () => this.free(), this.rand() );
	}
	free() {
		this.status = 'free';
		this.emit('free', this.status);
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
	addPerson() {
		this.countPeople++;
		this.emit('queueCount', this.countPeople);
	}
	removePerson() {
		if (this.countPeople != 0) {
			this.countPeople--;
		}
		this.emit('queueCount', this.countPeople);
	}
	getCount() {
		return this.countPeople;
	}
}



class App extends EventEmitor {
	constructor() {
		super();
		this.queue = new Queue;
		this.atmTable = [];
		this.logger = new Logger;
	}
	display() {
		this.queue.on('queueCount', () => this.logger.viewQueue(this.queue.getCount()));
		this.atmTable[0].on('busy', () => this.logger.atmBusy());
		this.atmTable[0].on('free', () => this.logger.atmFree());
	}
	generator(n, m) {
		setTimeout(() => {
			this.queue.addPerson();
			this.generator(n, m);
		}, this.rand(n, m));
	}
	rand(n, m) {
		return (Math.floor(Math.random() * (m - n + 1) + n)) * 1000;
	}

	getAtmCount() {
		return this.atmTable[0].countServedPeople;
	}
	
	addAtm() {
		const atm = new Atm(2000, 6000);
		atm.on('free', () => {
		  this.infOfWork();
		});
		atm.on('busy', () => {
		  setTimeout(() => {
			if (atm.getStatus() == 'busy') {
			  atm.free();
			}
		  }, atm.rand() );
		});
		this.atmTable.push(atm);
	  }

	infOfWork = () => {
		setTimeout(() => {
          if (this.queue.getCount() > 0 && this.atmTable[0].getStatus() === 'free') {
            this.atmTable[0].busy();
            this.queue.removePerson();
          }
		}, 1000);
		
	}

	start = () => {
		this.queue.on('queueCount', () => {
			this.infOfWork();
		});
	}

}


let app = new App;
app.addAtm();
app.generator(3, 5);
app.start();
app.display();






