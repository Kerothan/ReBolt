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
    rawMatsperTick?: number;
    ironPerTick?: number;
    coalPerTick?: number;
    oilPerTick?: number;
    fuelPerTick?: number;
    weaponsPerTick?: number;
}

interface Uses {
    rawMatsperTick?: number;
    ironPerTick?: number;
    coalPerTick?: number;
    oilPerTick?: number;
    fuelPerTick?: number;
    weaponsPerTick?: number;
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