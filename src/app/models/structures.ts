import { BuildDetails, BuildSet } from "./details";

export class Structures {
    stats: BuildSet = {
        //materials structures
        'digger':{
            'invCost':{
                'rawMats':5
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
            'invCost':{
                'rawMats':20,
                'iron':5
            },
            'unitCost':{
                'drones':2
            }
        },
    
        //storage structures
        'crates':{
            'invCost':{
                'rawMats':15
            },
            'uses':{
                'space':1
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
    counts: any = {
        'digger':0,
        'drill':0,
        'crates':0
    }

    constructor () {}
}