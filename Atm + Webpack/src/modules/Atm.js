import EventEmitor from './EventEmitor';


export default class Atm extends EventEmitor {
	constructor() {
		super();
		this.status = 'free';
		this.countServedPeople = 0;
	}
	getStatus() {
		return this.status;
	}
	busy(person) {
		this.countServedPeople++;
		this.status = 'busy';

		const time = person.randTime;

		this.emit('busy', time);
	}
	free() {
		this.status = 'free';
		this.emit('free');
	}
}