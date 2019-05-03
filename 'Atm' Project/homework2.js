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
		this.queue.on('queueCount', () => {
			this.infOfWork();
			// this.queueUI.span.innerText = this.queue.countPeople;
			this.queueUI.viewCount(this.queue.countPeople);
		});
		this.atmTable = [];
		this.atmUITable = [];
		this.waitAtmTable = [];
		this.logger = new Logger;
		this.counter = -1;
		this.queueUI = new QueueUI;
		this.queueUI.view();
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

		const atm = new Atm(6000, 8000);
		const atmUI = new AtmUI(atm);
		
		atmUI.view(this.counter);

		atm.on('free', () => {
			this.waitAtmTable = this.waitAtmTable.filter( a => a !== atm );
			console.log(this.waitAtmTable);
			this.infOfWork();
		});
		atm.on('busy', () => {
		  setTimeout(() => {
			  atm.free();
		  }, atm.rand() );
		});

		this.atmTable.push(atm);
		this.atmUITable.push(atmUI);
	  }

	infOfWork () {
		let freeAtm = this.freeAtmFunc();
		console.log(this.waitAtmTable);
			if (freeAtm && freeAtm.getStatus() === 'free' && this.queue.getCount() > 0) {
				this.waitAtmTable.push(freeAtm);
				this.queue.removePerson();
				// freeAtm.status = 'wait';
				setTimeout(() => {
					freeAtm.busy();
				}, 1000);
			} else if (!freeAtm && this.queue.getCount() > 0) {
				console.log('All atms are busy');
			}
	}

	start = () => {
		// this.queue.on('queueCount', () => {
		// 	this.infOfWork();
		// 	// this.queueUI.span.innerText = this.queue.countPeople;
		// 	this.queueUI.viewCount(this.queue.countPeople);
		// });
		app.generator(1, 4);
	}

	freeAtmFunc() {
		return this.atmTable.filter(atm => this.waitAtmTable.indexOf(atm) < 0).find( (atm) => atm.status === 'free');
	}

}


class AtmUI extends EventEmitor {
	constructor(atm) {
		super();
		this.realDivOfAtm = null;
		atm.on('busy', () => this.setBusy());
		atm.on('free', () => this.setFree());
	}
	view(counter) {
			let mainDiv = document.getElementById('content');
			let divOfAtm = document.createElement('div');
			

			divOfAtm.setAttribute('id', `atm${counter + 1}`);
			divOfAtm.setAttribute('class', 'free');

			this.realDivOfAtm = divOfAtm;
			mainDiv.appendChild(this.realDivOfAtm);
	}
	setFree() {
		this.realDivOfAtm.setAttribute('class', 'free');
	}
	setBusy() {
		this.realDivOfAtm.setAttribute('class', 'busy');
	}		
}


class QueueUI extends EventEmitor {
	constructor() {
		super();
		this.span = null;
	}
	view() {
			const mainDiv = document.getElementById('divOfQueue');
			const divOfQueue = document.createElement('div');

			mainDiv.appendChild(divOfQueue);

			const realDivOfQueue = mainDiv.getElementsByTagName('div')[0];

			realDivOfQueue.setAttribute('id', 'queue');
			realDivOfQueue.innerHTML = '<span></span>';

			let counter = realDivOfQueue.getElementsByTagName('span')[0];
			this.span = counter;
			this.span.setAttribute('id', 'queueCount');
	}
	viewCount(counter) {
		this.span.innerText = counter;
	}
}


let app = new App;
app.addAtm();
app.addAtm();
app.start();
app.display();
// app.generator(1,2);
 







