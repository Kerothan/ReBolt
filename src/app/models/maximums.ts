export class Maximum {
    maxRawMats: number;
    maxIron: number;
    maxCoal: number;
    maxOil: number;
    maxFuel: number;
    maxWeapons: number;

    constructor (maxRawMats=100,maxIron=20,maxCoal=20,maxOil=0,maxFuel=0,maxWeapons=5) {
        this.maxRawMats=maxRawMats;
        this.maxIron=maxIron;
        this.maxCoal=maxCoal;
        this.maxOil=maxOil;
        this.maxFuel=maxFuel;
        this.maxWeapons=maxWeapons;
    }
}