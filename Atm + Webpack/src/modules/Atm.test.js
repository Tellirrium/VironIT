import Atm from './Atm';
import Person from './Person';

describe('Atm', () => {
    const atm = new Atm();
    const person = new Person();
    atm.busy(person);

    test('setBusy method', () => {
        expect(atm.countServedPeople).toBe(1);
    });

    atm.free();

    test('setFree method', () => {
        expect(atm.status).toBe('free');
    });

    test('return status', () => {
        expect(atm.getStatus()).toBe('free');
    });

});