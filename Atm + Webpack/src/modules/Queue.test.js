import Queue from './Queue'

describe('Queue', () => {
    const queue = new Queue();
    queue.addPerson();
    queue.removePerson();

    test('removePerson', () => {
        expect(queue.countPeople.length).toBe(0);
    });

    test('getCount', () => {
        expect(queue.getCount()).toBe(0);
    });

    queue.removePerson();

    test('getCount', () => {
        expect(queue.countPeople.length).toBe(0);
    });

});