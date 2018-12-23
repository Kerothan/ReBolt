import { BuildSet, iInv } from "./details";

export class Inventory {
    //incremental inventory
    rawMats: iInv = {
        'amt':0,
        'max':100,
        'tick':1,
        'dispName':'Raw materials'
    }
    iron: iInv = {
        'amt':0,
        'max':20,
        'tick':0,
        'dispName':'Iron'
    };
    coal: iInv = {
        'amt':0,
        'max':20,
        'tick':0,
        'dispName':'Coal'
    };
    oil: iInv = {
        'amt':0,
        'max':0,
        'tick':0,
        'dispName':'Oil'
    };
    fuel: iInv = {
        'amt':0,
        'max':0,
        'tick':0,
        'dispName':'Fuel'
    };
    weapons: iInv = {
        'amt':0,
        'max':5,
        'tick':0,
        'dispName':'Weapons'
    };

    //static inventory
    power: number;
    usedPower: number;
    space: number;
    usedSpace: number;


    units: BuildSet={
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
        }
    }
    
    structs: BuildSet={
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
        this.rawMats.amt=rawMats;
        this.power=power;
        this.iron.amt=iron;
        this.coal.amt=coal;
        this.oil.amt=oil;
        this.fuel.amt=fuel;
        this.weapons.amt=weapons;
        this.space=space;
        this.usedPower=usedPower;
        this.usedSpace=usedSpace;
    }
}