import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory';
import { statGroups, buyCategories } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  /**
   * given an object creates an array of all property keys.
   * Required to itterate through object properties
   * @param obj object to generate array from
   */
  genArray(obj):any[]{
    return Object.keys(obj).map(key=>{return key})
  }

  /**
   * Validate whether an item can be purchased given current inventory
   * @param purchase string value name of item to purchase
   * @param inv global inventory object
   * @param cat category if item to purchase 
   */
  validateBuy(purchase:string,inv:Inventory,cat:buyCategories):boolean{
    let valid: boolean = true;
    if (purchase != 'drones' && inv.units.drones.count==0) return false;
    this.genArray(inv[cat][purchase]).forEach(stat=>{
      let purchasereq=inv[cat][purchase][stat];
      switch (stat){
      case statGroups.invCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>inv.mats[mat].amt) {
            valid = false
          };
        })
        break;
      case statGroups.unitCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>inv.units[mat].count) {
            valid = false
          };
        })
        break;
      case statGroups.staticCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat].amt>(inv[purchasereq[mat].res]-inv[mat]))
            valid= false;
        })
        break;
      }
    });
    return valid;;
  }

  /**
   * When item is purchased, calculate effects and adjust inventory accordingly
   * @param purchase string value name of item to purchase
   * @param inv global inventory object
   * @param cat category if item to purchase
   */
  buy(purchase:string,inv:Inventory,cat:buyCategories){
    this.genArray(inv[cat][purchase]).forEach(stat=>{
      let purchasereq=inv[cat][purchase][stat];
      let mats = this.genArray(purchasereq);
      switch (stat){
        //adjust inventory based on purchase
        case statGroups.invCost:
          mats.forEach(mat=>{
            inv.mats[mat].amt -= purchasereq[mat];
          })
          break;
        //adjust unit inventory based on purchase
        case statGroups.unitCost:
          mats.forEach(mat=>{
            inv.units[mat].count -= purchasereq[mat];
            if (!!inv.units[mat].staticCost.usedSpace)
              this.releaseSpace(inv.units[mat].staticCost.usedSpace.amt,inv);
          })
          break;
        //adjust static inventory based on purchase
        case statGroups.staticCost:
          mats.forEach(mat=>{
            inv[mat] += purchasereq[mat].amt;
          })
          break;
        //adjust inventory maximums based on storage
        case statGroups.storage:
          mats.forEach(mat=>{
            if (mat=='power') inv.power += purchasereq[mat]
            else inv.mats[mat].max += purchasereq[mat]
          })
          break;
        //adjust tick values based on Provides
        case statGroups.provides:
          mats.forEach(mat =>{
            inv.mats[mat].tick += purchasereq[mat];
          })
      }
    });
    inv[cat][purchase].count+=1;
  }

  /**
   * If an item is used in production or sold, calculate the space to remove from usedSpace
   * @param amt amount of space to release
   * @param inv global inventory object
   */
  releaseSpace(amt:number,inv:Inventory) {
    inv.usedSpace -= amt;
  }

  /**
   * Updates inventory based on production per tick up to maximum
   * @param inv global inventory object
   */
  tick (inv:Inventory) {
    let mats = inv.mats
    this.genArray(mats).forEach(mat => {
        if (mats[mat].amt<mats[mat].max){
            if (mats[mat].amt + mats[mat].tick > mats[mat].max)
                mats[mat].amt = mats[mat].max;
            else mats[mat].amt += mats[mat].tick;
        }
    });
  }

}
