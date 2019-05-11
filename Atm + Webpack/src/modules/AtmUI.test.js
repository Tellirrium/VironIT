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