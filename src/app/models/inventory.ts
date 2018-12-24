import { BuildSet, iInv, MatSet } from "./details";

export class Inventory {
    //incremental inventory
    mats:MatSet = {
        'rawMats': {
            'amt':0,
            'max':100,
            'tick':1,
            'dispName':'Raw materials'
        },
        'iron': {
            'amt':0,
            'max':20,
            'tick':0,
            'dispName':'Iron'
        },
        'coal':  {
            'amt':0,
            'max':20,
            'tick':0,
            'dispName':'Coal'
        },
        'oil': {
            'amt':0,
            'max':0,
            'tick':0,
            'dispName':'Oil'
        },
        'fuel': {
            'amt':0,
            'max':0,
            'tick':0,
            'dispName':'Fuel'
        },
        'weapons': {
            'amt':0,
            'max':5,
            'tick':0,
            'dispName':'Weapons'
        }
    }

    //static inventory
    power: number;
    usedPower: number;
    space: number;
    usedSpace: number;


    units: BuildSet={
        //units
        'drones':{
            'unlocked':true,
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
                'space':0.5
            }
        }
    }
    
    structs: BuildSet={
        //structures
        //resource gathering
        'digger':{
            'unlocked':true,
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
                'rawMats':2,
                'coal':.5,
                'iron':.5
            },
            'reset':{
                'scrap':2,
                'space':.5
            }
        },
        'drill':{
            'unlocked':false,
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
            },
            'reset':{
                'scrap':4,
                'space':2
            }
        },
    
        //storage structures
        'crates':{
            'unlocked':true,
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
            },
            'reset':{
                'scrap':2
            }
        }

        //refinement structures

        //manufacturing structures

        //core structures
    }

    constructor (rawMats=0,power=10,iron=0,coal=0,oil=0,fuel=0,weapons=0,space=25,usedSpace=0,usedPower=0) {
        this.mats.rawMats.amt=rawMats;
        this.power=power;
        this.mats.iron.amt=iron;
        this.mats.coal.amt=coal;
        this.mats.oil.amt=oil;
        this.mats.fuel.amt=fuel;
        this.mats.weapons.amt=weapons;
        this.space=space;
        this.usedPower=usedPower;
        this.usedSpace=usedSpace;
    }
}