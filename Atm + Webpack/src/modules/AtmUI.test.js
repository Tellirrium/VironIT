import AtmUI from './AtmUI'
import Atm from './Atm'


describe('AtmUI', () => {
    const atm = new Atm();
    const atmUI = new AtmUI(atm);

    test('setFree and setBusy methods', () => {
        expect(atmUI.realDivOfAtm).toBe(null);
        atmUI.view(0);
        expect(atmUI.realDivOfAtm instanceof HTMLDivElement).toBe(true);
        atmUI.setFree();
        expect(/free/.test(atmUI.realDivOfAtm.className)).toBe(true);
        atmUI.setBusy();
        expect(/busy/.test(atmUI.realDivOfAtm.className)).toBe(true);
        atm.emit('free');
        expect(/free/.test(atmUI.realDivOfAtm.className)).toBe(true);
        atm.emit('busy');
        expect(/busy/.test(atmUI.realDivOfAtm.className)).toBe(true);
    });

}); 

const atm = new Atm();
const atmUI = new AtmUI(atm);
document.body.innerHTML = '<div id="content"></div><div id="divOfQueue"></div><div class="addAtm">Add Atm</div><div class="removeAtm">Remove Atm</div>';

test('delete Atm', () => {
    expect(atmUI.realDivOfAtm).toBe(null);
    atmUI.view(0);
    expect(atmUI.realDivOfAtm instanceof HTMLDivElement).toBe(true);
    expect(atmUI.realDivOfAtm.parentNode instanceof HTMLDivElement).toBe(true);
    const main = atmUI.realDivOfAtm.parentNode;
    expect(main.children.length).toBe(2);
    expect(main instanceof HTMLDivElement).toBe(true);
    atmUI.deleteAtm();
    expect(main.children.length).toBe(1);
    expect(main instanceof HTMLDivElement).toBe(true);
});

test('view without main ', () => {
    const elem = document.getElementById('content');
    elem.parentNode.removeChild(elem);
    atmUI.view(1);
    const main = atmUI.realDivOfAtm.parentNode;
    expect(main).toBe(null);
});

test('deiete atm when (if) == busy', () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'content');
    document.body.appendChild(main);
    atmUI.view(2);
    const real = atmUI.realDivOfAtm.parentNode;
    expect(real.children.length).toBe(1);
    atmUI.setBusy();
    atmUI.deleteAtm();
    expect(real.children.length).toBe(1);
});

