import EventEmitor from './EventEmitor';
import Person from './Person';


export default class Queue extends EventEmitor {
	constructor() {
		super();
		this.countPeople = [];
	}
	addPerson() {
		const person = new Person();
		this.countPeople.push(person);
		this.emit('queueCount', this.countPeople.length);
	}
	removePerson() {
		let remPer;
		if (this.countPeople.length != 0) {
			remPer = this.countPeople.shift();
		}
		this.emit('queueCount', this.countPeople.length);
		return remPer;
	}
	getCount() {
		return this.countPeople.length;
	}
}