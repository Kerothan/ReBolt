import { BuildSet } from "./details";

export class Inventory {
    //incremental inventory
    rawMats: number;
    iron: number;
    coal: number;
    oil: number;
    fuel: number;
    weapons: number;

    //static inventory
    power: number;
    usedPower: number;
    space: number;
    usedSpace: number;


    builds: BuildSet={
        //units
        'drones':{
            'count':0,
            'invCost':{
                'rawMats':2,
            },
            'staticCost':{
                'usedSpace':{
                    'amt':0.5,
                    'res':'space'
                }
            },
            'reset':{
                'scrap':1,
                'space':0.1
            }
        },
    
        //structures
        //resource gathering
        'digger':{
            'count':0,
            'invCost':{
                'rawMats':5,
            },
            'staticCost':{
                'usedSpace':{
                    'amt':1,
                    'res':'space'
                }
            },
            'unitCost':{
                'drones':1
            },
            'provides':{
                'rawMatsperTick':2,
                'coalPerTick':.5
            }
        },
        'drill':{
            'count':0,
            'invCost':{
                'rawMats':20,
                'iron':5,
            },
            'staticCost':{
                'usedSpace':{
                    'amt':4,
                    'res':'space'
                }
            },
            'unitCost':{
                'drones':2
            }
        },
    
        //storage structures
        'crates':{
            'count':0,
            'invCost':{
                'rawMats':15,
            },
            'staticCost':{
                'usedSpace':{
                    'amt':1,
                    'res':'space'
                }
            },
            'storage':{
                'rawMats':20,
                'coal':10,
                'iron':10
            }
        }

        //refinement structures

        //manufacturing structures

        //core structures
    }

    constructor (rawMats=0,power=10,iron=0,coal=0,oil=0,fuel=0,weapons=0,space=25,usedSpace=0,usedPower=0) {
        this.rawMats=rawMats;
        this.power=power;
        this.iron=iron;
        this.coal=coal;
        this.oil=oil;
        this.fuel=fuel;
        this.weapons=weapons;
        this.space=space;
        this.usedPower=usedPower;
        this.usedSpace=usedSpace;
    }
}