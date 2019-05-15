export default class Logger {
	viewQueue(count) {
		console.log(`counter ${count}`);
	}
	atmFree() {
		console.log('Atm is free');
	}
	atmBusy() {
		console.log('Atm is busy');
	}
}