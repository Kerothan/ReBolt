import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory';
import { statGroups, buyCategories } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  genArray(obj):any[]{
    return Object.keys(obj).map(key=>{return key})
  }

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

  releaseSpace(amt:number,inv:Inventory) {
    inv.usedSpace -= amt;
  }

}
