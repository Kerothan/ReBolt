interface InvCost {
    rawMats?: number;
    power?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
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
    power?: number;
}

interface Uses {
    rawMatsperTick?: number;
    ironPerTick?: number;
    coalPerTick?: number;
    oilPerTick?: number;
    fuelPerTick?: number;
    weaponsPerTick?: number;
    power?: number;
    space?: number;
}

interface Storage {
    rawMats?: number;
    iron?: number;
    coal?: number;
    oil?: number;
    fuel?: number;
    weapons?: number;
}
interface Reset {
    scrap?: number,
    space?: number
}

export interface BuildDetails {
    invCost: InvCost;
    unitCost?: UnitCost;
    provides?: Provides;
    uses?: Uses;
    storage?: Storage;
    reset?: Reset;
}

export interface BuildSet {
    [key: string]: BuildDetails;
}