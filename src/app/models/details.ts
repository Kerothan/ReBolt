export interface iInv {
    amt: number;
    max: number;
    tick: number;
    dispName: string;
}

interface InvCost {
    rawMats?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
    scrap?: number;
}

interface StaticCost {
    usedPower?: {
        'amt':number;
        'res':string;
    }
    usedSpace?: {
        'amt':number;
        'res':string;
    }
}

interface UnitCost {
    drones?: number;
}

interface Provides {
    rawMats?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
}

interface Uses {
    rawMats?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
}

interface Storage {
    rawMats?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
    power?: number;
}
interface Reset {
    scrap?: number,
    space?: number
}

export interface BuildDetails {
    unlocked:boolean;
    count: number;
    invCost: InvCost;
    staticCost?: StaticCost;
    unitCost?: UnitCost;
    provides?: Provides;
    uses?: Uses;
    storage?: Storage;
    reset?: Reset;
}

export interface BuildSet {
    [key: string]: BuildDetails;
}

export interface MatSet{
    [key:string]: iInv;
}

export enum statGroups {
    invCost = 'invCost',
    staticCost = 'staticCost',
    unitCost = 'unitCost',
    provides = 'provides',
    uses = 'uses',
    storage = 'storage',
    rest = 'rest'
}

export enum buyCategories {
    unit='units',
    struct='structs'
}

export enum invTypes {
    rawMats = 'rawMats',
    iron = 'iron',
    coal = 'coal',
    oil = 'oil',
    fuel = 'fuel',
    weapons = 'weapons',
    scrap = 'scrap'
}