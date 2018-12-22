import { BuildSet } from "./details";

export class Units {
    
    stats: BuildSet = {
        'drones':{
            'invCost':{
                'rawMats':2
            },
            'uses':{
                'space':0.5
            },
            'reset':{
                'scrap':1,
                'space':0.1
            }
        }
    }

    counts: any = {
        'drones':0
    }
    
    //drones: BuildDetails={};

    constructor (drones=0) {
        this.counts.drones = drones;
    }
}