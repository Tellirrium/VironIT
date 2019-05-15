import App from './App'
import Person from './Person'

describe('App', () => {
    const app = new App();
    const person = new Person();
    const handler = jest.fn();
    afterEach( () => handler.mockClear() );
    
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
        app.addAtm();
        expect(app.waitAtmTable.length).toBe(0);
        app.queue.addPerson();
        app.atmTable[0].emit('busy');
        jest.advanceTimersByTime(9000);
        expect(app.waitAtmTable.length).toBe(1);
    });

    test('check setTimeout2', () => {

        app.addAtm();
        expect(app.atmTable[1].status).toBe('free');
        app.infOfWork();
        jest.advanceTimersByTime(1000);
        expect(app.waitAtmTable.length).toBe(2);
        app.atmTable[1].emit('free');
        expect(app.waitAtmTable.length).toBe(1);  
    });
});

const app = new App();

test('without peoples', () => {
    app.addAtm();
    expect(app.atmTable.length).toBe(1);
    app.queue.countPeople = [];
    app.atmTable[0].emit('free');
    jest.advanceTimersByTime(6000);
    expect(app.atmTable.length).toBe(0);
    expect(app.atmUITable.length).toBe(0);
});

test('freeAtmFunc', () => {
    app.addAtm();
    const a = app.freeAtmFunc();
    expect(app.atmTable[0]).toBe(a);
});

test('rand', () => {
    const a = app.rand(1, 5);  
    expect(!isNaN(a)).toBe(true);
});

jest.useFakeTimers();

// test('emit busy test', () => {
//     expect(app.atmTable).toBe(1);
//     expect(app.atmTable[0].status).toBe('free');
//     app.atmTable[0].status = 'busy';
//     expect(app.atmTable[0].status).toBe('busy');
//     app.atmTable[0].emit('busy');
//     jest.advanceTimersByTime(9000);
//     expect(app.atmTable[0].status).toBe('free');
// });





