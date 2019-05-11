import App from './App'
import Person from './Person'

describe('App', () => {
    const app = new App();
    const person = new Person();
    
    jest.useFakeTimers();

    test('check setTimeout', () => {
        app.start(app);
        jest.advanceTimersByTime(3000);
        expect(app.queue.getCount()).toBeGreaterThan(0);
    });

    test('check atms', () => {
        expect(app.counter).toBe(-1);
        expect(app.atmTable.length).toBe(0);
        expect(app.atmUITable.length).toBe(0);
        app.addAtm();
        expect(app.counter).toBe(0);
        expect(app.atmTable.length).toBe(1);
        expect(app.atmUITable.length).toBe(1);
        app.removeAtm(); 
        expect(app.atmTable.length).toBe(0);
    });

    test('check setTimeout2', () => {
        app.addAtm();
        expect(app.atmTable[0].status).toBe('free');
        app.infOfWork();
        jest.advanceTimersByTime(1000);
        expect(app.atmTable[0].status).toBe('busy');
        expect(app.waitAtmTable.length).toBe(1);
        app.atmTable[0].emit('free');
        expect(app.waitAtmTable.length).toBe(0);
        app.addAtm();
        app.atmTable[1].status = 'busy';
        app.atmTable[1].emit('busy');
        jest.advanceTimersByTime(person.randTime);
        try {
            expect(app.atmTable[1].status).toBe('free');
        }
        catch {
            expect(app.atmTable[1].status).toBe('busy');
        }
    });

    test('without freeAtm', () => {
        app.addAtm();
        app.atmTable[0].status = 'busy';
        app.queue.addPerson();
        app.infOfWork();
    });

    

});