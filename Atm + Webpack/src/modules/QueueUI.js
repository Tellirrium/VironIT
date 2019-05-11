import EventEmitor from './EventEmitor';

export default class QueueUI extends EventEmitor {
	constructor() {
		super();
		this.span = null;
	}
	view() {
			const mainDiv = document.getElementById('divOfQueue') || document.createElement('div');
			const divOfQueue = document.createElement('div');

			mainDiv.appendChild(divOfQueue);

			const realDivOfQueue = mainDiv.getElementsByTagName('div')[0];

			realDivOfQueue.setAttribute('id', 'queue');
			realDivOfQueue.innerHTML = '<span></span>';

			let counter = realDivOfQueue.getElementsByTagName('span')[0];
			this.span = counter;
			this.span.setAttribute('id', 'queueCount');
	}
	viewCount(length) {
		this.span.innerText = length;
	}
}