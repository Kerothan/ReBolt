import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory';
import { statGroups, buyCategories, Reset } from '../models/details';
import { Core } from '../models/core';
import { initMats, initUnits, initStructs } from '../game/data/initdata';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  inv:Inventory = new Inventory();
  core:Core = new Core;

  constructor() {
    this.init();
   }

  init():void{
    this.inv.mats=JSON.parse(JSON.stringify(initMats));
    this.inv.power=10;
    this.inv.space=25;
    this.inv.usedPower=0;
    this.inv.usedSpace=0;
    this.inv.units=JSON.parse(JSON.stringify(initUnits));
    this.inv.structs=JSON.parse(JSON.stringify(initStructs));
    //this.inv.structs={};
  }
  /**
   * given an object creates an array of all property keys.
   * Required to itterate through object properties
   * @param obj object to generate array from
   */
  genArray(obj):any[]{
    return Object.keys(obj);
  }

  /**
   * Validate whether an item can be purchased given current inventory
   * @param purchase string value name of item to purchase
   * @param cat category if item to purchase 
   */
  validateBuy(purchase:string,cat:buyCategories):boolean{
    let valid: boolean = true;
    if (purchase != 'drones' && this.inv.units.drones.count==0) return false;
    this.genArray(this.inv[cat][purchase]).forEach(stat=>{
      let purchasereq=this.inv[cat][purchase][stat];
      switch (stat){
      case statGroups.invCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>this.inv.mats[mat].amt) {
            valid = false
          };
        })
        break;
      case statGroups.unitCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>this.inv.units[mat].count) {
            valid = false
          };
        })
        break;
      case statGroups.staticCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat].amt>(this.inv[purchasereq[mat].res]-this.inv[mat]))
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
   * @param cat category if item to purchase
   */
  buy(purchase:string,cat:buyCategories){
    this.genArray(this.inv[cat][purchase]).forEach(stat=>{
      let purchasereq=this.inv[cat][purchase][stat];
      let mats = this.genArray(purchasereq);
      switch (stat){
        //adjust inventory based on purchase
        case statGroups.invCost:
          mats.forEach(mat=>{
            this.inv.mats[mat].amt -= purchasereq[mat];
          })
          break;
        //adjust unit inventory based on purchase
        case statGroups.unitCost:
          mats.forEach(mat=>{
            this.inv.units[mat].count -= purchasereq[mat];
            if (!!this.inv.units[mat].staticCost.usedSpace)
              this.releaseSpace(this.inv.units[mat].staticCost.usedSpace.amt);
          })
          break;
        //adjust static inventory based on purchase
        case statGroups.staticCost:
          mats.forEach(mat=>{
            this.inv[mat] += purchasereq[mat].amt;
          })
          break;
        //adjust inventory maximums based on storage
        case statGroups.storage:
          mats.forEach(mat=>{
            if (mat=='power') this.inv.power += purchasereq[mat]
            else this.inv.mats[mat].max += purchasereq[mat]
          })
          break;
        //adjust tick values based on Provides
        case statGroups.provides:
          mats.forEach(mat =>{
            this.inv.mats[mat].tick += purchasereq[mat];
          })
      }
    });
    this.inv[cat][purchase].count+=1;
  }

  /**
   * If an item is used in production or sold, calculate the space to remove from usedSpace
   * @param amt amount of space to release
   */
  releaseSpace(amt:number) {
    this.inv.usedSpace -= amt;
  }

  /**
   * Updates inventory based on production per tick up to maximum
   */
  tick () {
    let mats =this.inv.mats
    this.genArray(mats).forEach(mat => {
        if (mats[mat].amt<mats[mat].max){
            if (mats[mat].amt + mats[mat].tick > mats[mat].max)
                mats[mat].amt = mats[mat].max;
            else mats[mat].amt += mats[mat].tick;
        }
    });
  }

  resetCalc (): Reset {
    return {};
  }

  reset () {
    let resetVal = this.resetCalc();
  }

}
