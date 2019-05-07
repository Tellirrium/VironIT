import EventEmitor from './EventEmitor';


export default class Atm extends EventEmitor {
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