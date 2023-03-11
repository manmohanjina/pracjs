"use strict";
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode,
            this.burstMode = burstMode,
            this.filter = filter;
    }
}
let newapp = new Instagram("still", "aromatic", 5);
console.log(newapp);
