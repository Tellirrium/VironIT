import Atm from './Atm'
import AtmUI from './AtmUI'
import Logger from './Logger'
import Queue from './Queue'
import QueueUI from './QueueUI'
import EventEmitor from './EventEmitor'


export default class App extends EventEmitor {
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
		// this.atmTable.forEach( elem => elem.on('busy', () => this.logger.atmBusy()) );
		// this.atmTable.forEach( elem => elem.on('free', () => this.logger.atmFree()) );
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

		atm.on('free', () => this.logger.atmFree());
		atm.on('busy', () => this.logger.atmBusy());

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

	start(app) {
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