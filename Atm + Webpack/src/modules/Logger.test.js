import Logger from './Logger'

describe('Logger', () => {
    const logger = new Logger();
    
    test('check message', () => {
       global.console = { log: jest.fn() };
       logger.viewQueue('15');
       expect(console.log).toBeCalled();
       logger.atmBusy();
       expect(console.log).toBeCalled();
       logger.atmFree();
       expect(console.log).toBeCalled();
    });

});