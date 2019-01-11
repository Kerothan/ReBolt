import { MatSet, BuildSet } from "src/app/models/details";


//incremental inventory
export const initMats:MatSet = {
    rawMats: {
        unlocked:true,
        amt:0,
        max:100,
        tick:1,
        dispName:'Raw materials'
    },
    iron: {
        unlocked:true,
        amt:0,
        max:20,
        tick:0,
        dispName:'Iron'
    },
    coal:  {
        unlocked:true,
        amt:0,
        max:20,
        tick:0,
        dispName:'Coal'
    },
    oil: {
        unlocked:true,
        amt:0,
        max:0,
        tick:0,
        dispName:'Oil'
    },
    fuel: {
        unlocked:false,
        amt:0,
        max:0,
        tick:0,
        dispName:'Fuel'
    },
    weapons: {
        unlocked:false,
        amt:0,
        max:5,
        tick:0,
        dispName:'Weapons'
    }
}

//static inventory
const initPower: number = 10;
const initUsedPower: number =0;
const initSpace: number = 25;
const initUsedSpace: number = 0;


export const initUnits: BuildSet={
    //units
    drones:{
        unlocked:true,
        count:0,
        invCost:{
            rawMats:2,
        },
        staticCost:{
            usedSpace:{
                amt:0.5,
                res:'space'
            }
        },
        reset:{
            scrap:1,
            space:0.5
        }
    }
}

export const initStructs: BuildSet={
    //structures
    //resource gathering
    digger:{
        unlocked:true,
        count:0,
        invCost:{
            rawMats:5,
        },
        staticCost:{
            usedSpace:{
                amt:1,
                res:'space'
            }
        },
        unitCost:{
            drones:1
        },
        provides:{
            rawMats:2,
            coal:.5,
            iron:.5
        },
        reset:{
            scrap:2,
            space:.5
        }
    },
    drill:{
        unlocked:false,
        count:0,
        invCost:{
            rawMats:20,
            iron:5,
        },
        staticCost:{
            usedSpace:{
                amt:4,
                res:'space'
            }
        },
        unitCost:{
            drones:2
        },
        reset:{
            scrap:4,
            space:2
        }
    },

    //storage structures
    crates:{
        unlocked:true,
        count:0,
        invCost:{
            rawMats:15,
        },
        staticCost:{
            usedSpace:{
                amt:1,
                res:'space'
            }
        },
        storage:{
            rawMats:20,
            coal:10,
            iron:10
        },
        reset:{
            scrap:2
        }
    }

    //refinement structures

    //manufacturing structures

    //core structures
}