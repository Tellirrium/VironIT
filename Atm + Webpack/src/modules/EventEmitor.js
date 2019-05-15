export default class EventEmitor {
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
	clear() {
		const arrayEvent = Object.keys(this.eventTable);
		for (let i = 0; i < arrayEvent.length; i += 1) {
			this.eventTable[arrayEvent[i]] = null;
			delete this.eventTable[arrayEvent[i]];
		}
	}
}