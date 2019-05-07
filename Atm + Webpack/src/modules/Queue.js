import EventEmitor from './EventEmitor';


export default class Queue extends EventEmitor {
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