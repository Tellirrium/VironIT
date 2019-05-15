import EventEmitor from './EventEmitor'

describe('EventEmitor', () => {
    const ee = new EventEmitor();
    const handler = jest.fn();
    afterEach( () => handler.mockClear() );
    
    test('check on add emit', () => {
        ee.on('test', handler);
        ee.emit('test');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    test('add new emit', () => {
        ee.on('test', handler);
        expect(ee.eventTable.test.length).toBe(2);
    });

    test('emit is true or false', () => {
        ee.on('test', handler);
        ee.emit('testgfh');
        expect(handler).toHaveBeenCalledTimes(0);
    });

    test('delete ', () => {
        const f = ee.on('test', handler);
        f();
        ee.emit('test');
        expect(handler).toHaveBeenCalledTimes(3);
    });

    test('clear eventTable ', () => {
        ee.on('tests', () => handler);
        ee.clear();
        // expect(ee.eventTable['tests'].length).toBe(0);
        expect(handler).toHaveBeenCalledTimes(0);
    });
})