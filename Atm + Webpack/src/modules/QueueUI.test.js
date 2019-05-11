import QueueUI from './QueueUI'

describe('QueueUI', () => {
    const queueUI = new QueueUI();

    test('display queue', () => {
        expect(queueUI.span).toBe(null);
        queueUI.view();
        expect(queueUI.span instanceof HTMLSpanElement).toBe(true);
        queueUI.viewCount(5);
        expect(queueUI.span.innerText).toBe(5);
    });
});