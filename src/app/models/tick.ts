import { Inventory } from "./inventory";
import { GameService } from "../services/game.service";

export class Tick {
    
    constructor (private gameSvc:GameService) {}

    /**
     * Updates inventory based on production per tick up to maximum
     * @param inv inventory object passed from game component
     * @param max maximum object passed from game component
     */
    tick (inv:Inventory) {
        let mats = inv.mats
        this.gameSvc.genArray(mats).forEach(mat => {
            if (mats[mat].amt<mats[mat].max){
                if (mats[mat].amt + mats[mat].tick > mats[mat].max)
                    mats[mat].amt = mats[mat].max;
                else mats[mat].amt += mats[mat].tick;
            }
        });
    }
}