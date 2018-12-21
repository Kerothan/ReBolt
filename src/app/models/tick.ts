import { Core } from "./core";
import { Maximum } from "./maximums";
import { Inventory } from "./inventory";

export class Tick {
    rawMatsperTick: number;
    ironPerTick: number;
    coalPerTick: number;
    oilPerTick: number;
    fuelPerTick: number;
    weaponsPerTick: number;

    constructor (rawMatsperTick=1,ironPerTick=0,coalPerTick=0,oilPerTick=0,fuelPerTick=0,weaponsPerTick=0){
        this.rawMatsperTick=rawMatsperTick;
        this.ironPerTick=ironPerTick;
        this.coalPerTick=coalPerTick;
        this.oilPerTick=oilPerTick;
        this.fuelPerTick=fuelPerTick;
        this.weaponsPerTick=weaponsPerTick;
    }

    tick (inv:Inventory,max:Maximum) {
        if (inv.rawMats<max.maxRawMats){
            if (inv.rawMats + this.rawMatsperTick > max.maxRawMats)
                inv.rawMats = max.maxRawMats;
            else inv.rawMats += this.rawMatsperTick;
        }
    }
}