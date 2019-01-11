import { BuildSet, MatSet } from "./details";

export class Inventory {
    //incremental inventory
    mats:MatSet;

    //static inventory
    power: number;
    usedPower: number;
    space: number;
    usedSpace: number;


    units: BuildSet;
    structs: BuildSet;

    constructor(){}
}