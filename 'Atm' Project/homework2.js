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
		console.log(`Atm is free`);
	}
	atmBusy() {
		console.log(`Atm is busy`);
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
		this.counter = -1;

		const queueUI = new QueueUI;
		queueUI.view();
		queueUI.emit('display');
	}
	display() {
		this.queue.on('queueCount', () => this.logger.viewQueue(this.queue.getCount()));
		this.atmTable.forEach( elem => elem.on('busy', () => this.logger.atmBusy()) );
		this.atmTable.forEach( elem => elem.on('free', () => this.logger.atmFree()) );
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
	
	addAtm() {
		this.counter++;

		const atm = new Atm(4000, 8000);
		const atmUI = new AtmUI;

		atmUI.view();
		atmUI.emit('display', this.counter);

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
		let freeAtm = this.atmTable.find( (atm) => atm.getStatus() == 'free');

			if (freeAtm && this.queue.getCount() > 0) {
				setTimeout(() => {
            		freeAtm.busy();
            		this.queue.removePerson();
				}, 1000);
			} else if (!freeAtm && this.queue.getCount() > 0) {
				console.log('All atms are busy');
			}
	}

	start = () => {
		this.queue.on('queueCount', () => {
			this.infOfWork();
		});
	}

}


class AtmUI extends EventEmitor {
	constructor() {
		super();
	}
	view() {
		this.on('display', (counter) => {
			let mainDiv = document.getElementById('content');
			let divOfAtm = document.createElement('div');
			
			mainDiv.appendChild(divOfAtm);

			let realDivOfAtm = mainDiv.getElementsByTagName('div')[counter];

			realDivOfAtm.setAttribute('id', `atm${counter + 1}`);
		});
	}		
}


class QueueUI extends EventEmitor {
	constructor() {
		super();
	}
	view() {
		this.on('display', () => {
			const mainDiv = document.getElementById('divOfQueue');
			const divOfQueue = document.createElement('div');

			mainDiv.appendChild(divOfQueue);

			const realDivOfQueue = mainDiv.getElementsByTagName('div')[0];

			realDivOfQueue.setAttribute('id', 'queue');
		});
	}
}


let app = new App;
app.addAtm();
app.addAtm();
app.generator(1, 2);
app.start();
app.display();
 







