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

    /**
     * Updates inventory based on production per tick up to maximum
     * @param inv inventory object passed from game component
     * @param max maximum object passed from game component
     */
    tick (inv:Inventory) {
        if (inv.rawMats.amt<inv.rawMats.max){
            if (inv.rawMats.amt + inv.rawMats.tick > inv.rawMats.max)
                inv.rawMats.amt = inv.rawMats.max;
            else inv.rawMats.amt += inv.rawMats.tick;
        }
    }
}