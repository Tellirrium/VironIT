import EventEmitor from './EventEmitor';

export default class AtmUI extends EventEmitor {
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
			if (mainDiv) {
				mainDiv.appendChild(this.realDivOfAtm);
			}
	}
	setFree() {
		this.realDivOfAtm.setAttribute('class', 'free');
	}
	setBusy() {
		this.realDivOfAtm.setAttribute('class', 'busy');
	}
	deleteAtm() {
		let mainDiv = document.getElementById('content');
		if (mainDiv) {
			let elements = [].slice.call(mainDiv.children);
		
			if (elements.indexOf(this.realDivOfAtm) != -1 && this.realDivOfAtm.className == 'free') {
				mainDiv.removeChild(this.realDivOfAtm);
				this.clear();
			}
		}	
	}		
}
