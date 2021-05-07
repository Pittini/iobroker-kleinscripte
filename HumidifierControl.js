const Skriptversion = "0.0.2" //vom 03.05.2021 - 
// Skript um Luftbefeuchter bei offenem Fenster oder zu niedrigem Wasserstand abzuschalten.

const HumiPowerOid = 'javascript.0.MiHomeAll.312463870.power';/*power*/
const HumiWaterLevelOid = 'javascript.0.MiHomeAll.312463870.depth';/*depth*/
const HumiWaterDepthLimit = 20;
const WindowIsOpenOid = 'javascript.0.FensterUeberwachung.Wohnzimmer.WindowIsOpen';

let WindowIsOpen = getState(WindowIsOpenOid).val;
let HumiWaterDepth = getState(HumiWaterLevelOid).val;


// Ab hier nix mehr ändern
HumiControl();

function HumiControl() {
    if (WindowIsOpen || HumiWaterDepth < HumiWaterDepthLimit) {
        setState(HumiPowerOid, false);
    } else {
        setState(HumiPowerOid, true);
    };
}

on(WindowIsOpenOid, function (dp) { //Trigger für Fenster erzeugen
    WindowIsOpen = dp.state.val;
    HumiControl();
});

on(HumiWaterLevelOid, function (dp) { //Trigger für Temperatur erzeugen
    HumiWaterDepth = dp.state.val;
    HumiControl();
});