//Skript um via Messung des Energieverbrauchs zu erkennen wann die Waschmaschine gestartet wurde und fertig ist

let VerbrauchBeiFertig = 3; //Hier eintragen wieviel Watt die Maschine verbraucht wenn sie fertig ist
let WaschMaschMessDose = "sonoff.0.Sonoff10.ENERGY_Power"; //Hier den Datenpunkt angeben welcher den Verbrauchswert festlegt

//Ab hier nichts mehr ändern
let Running = false;
let OldRunning = false;

function VerifyRunning() {
    if (getState(WaschMaschMessDose).val <= VerbrauchBeiFertig) { // Wenn Verbrauch kleiner 3 Watt
        Running = false; //Läuft nicht
    }
    else {
        Running = true
    };

    if (Running == true && OldRunning == false) {
        OldRunning = true;
        log("Waschmaschine gestartet");
        WriteEventLog("Waschmaschine gestartet");

    }
    else if (Running == false && OldRunning == true) {
        OldRunning = false
        log("Waschmaschine ist fertig");
        WriteEventLog("Waschmaschine ist fertig");
        Say("Waschmaschine ist fertig");
    };
};

on(WaschMaschMessDose, function (dp) { //
    VerifyRunning()
});

