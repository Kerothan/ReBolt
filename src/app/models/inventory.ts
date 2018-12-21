export class Inventory {
    rawMats: number;
    power: number;
    iron: number;
    coal: number;
    oil: number;
    fuel: number;
    weapons: number;

    constructor (rawMats=0,power=10,iron=0,coal=0,oil=0,fuel=0,weapons=0) {
        this.rawMats=rawMats;
        this.power=power;
        this.iron=iron;
        this.coal=coal;
        this.oil=oil;
        this.fuel=fuel;
        this.weapons=weapons;
    }
}