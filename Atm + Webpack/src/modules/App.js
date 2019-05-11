import Atm from './Atm'
import AtmUI from './AtmUI'
import Logger from './Logger'
import Queue from './Queue'
import QueueUI from './QueueUI'
import EventEmitor from './EventEmitor'
import Person from './Person'


export default class App extends EventEmitor {
	constructor() {
		super();
		this.queue = new Queue;
		this.logger = new Logger;
		this.queueUI = new QueueUI;
		this.queueUI.view();
		this.queue.on('queueCount', () => {
			this.infOfWork();
			// this.queueUI.span.innerText = this.queue.countPeople;
			this.queueUI.viewCount(this.queue.getCount());
			this.logger.viewQueue(this.queue.getCount())
		});
		this.atmTable = [];
		this.atmUITable = [];
		this.waitAtmTable = [];
		this.counter = -1;
	}
	// display() {
	// 	this.queue.on('queueCount', (length) => this.logger.viewQueue(length));
	// }
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

		const atm = new Atm();
		const atmUI = new AtmUI(atm);
		
		atmUI.view(this.counter);

		atm.on('free', () => this.logger.atmFree());
		atm.on('busy', () => this.logger.atmBusy());

		atm.on('free', () => {
			this.waitAtmTable = this.waitAtmTable.filter( a => a !== atm );
			console.log(this.waitAtmTable);
			this.infOfWork();
		});
		atm.on('busy', (time) => {
		  setTimeout(() => {
			  atm.free();
		  }, time );
		});

		this.atmTable.push(atm);
		this.atmUITable.push(atmUI);
	  }

	removeAtm() {
		this.atmTable.pop();
		const main = document.getElementById('content');
		try {  
			main.removeChild(main.lastChild);
		}
		catch {

		}
	}

	infOfWork () {
		let freeAtm = this.freeAtmFunc();

		console.log(this.waitAtmTable);
			if (freeAtm && freeAtm.getStatus() === 'free' && this.queue.getCount() > 0) {
				this.waitAtmTable.push(freeAtm);

				const person = this.queue.removePerson();

				console.log(person);

				setTimeout(() => {
					freeAtm.busy(person);
				}, 1000);
			} else if (!freeAtm && this.queue.getCount() > 0) {
				console.log('All atms are busy');
			}
	}

	start(app) {
		app.generator(1, 3);
	}

	freeAtmFunc() {
		return this.atmTable.filter(atm => this.waitAtmTable.indexOf(atm) < 0).find( (atm) => atm.status === 'free');
	}

}