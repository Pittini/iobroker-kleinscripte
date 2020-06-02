//Simple Funktion um Datenpunkte mit true/false an, aus oder umzuschalten.

function SwitchTargetId(WhatToSwitch, HowToSwitch) {
    switch (HowToSwitch) {
        case "um":
            if (getState(WhatToSwitch).val == true) {
                setState(WhatToSwitch, false);
            }
            else {
                setState(WhatToSwitch, true);
            };
            break;
        case "an":
            setState(WhatToSwitch, true);
            break;
        case "aus":
            setState(WhatToSwitch, false);
            break;
        default:
    };
};