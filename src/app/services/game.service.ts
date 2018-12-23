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
          if (purchasereq[mat]>inv[mat].amt) {
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
      switch (stat){
        case statGroups.invCost:
          this.genArray(purchasereq).forEach(mat=>{
            inv[mat].amt -= purchasereq[mat];
          })
          break;
        case statGroups.unitCost:
          this.genArray(purchasereq).forEach(mat=>{
            inv.units[mat].count -= purchasereq[mat];
            if (!!inv.units[mat].staticCost.usedSpace)
              this.releaseSpace(inv.units[mat].staticCost.usedSpace.amt,inv);
          })
          break;
        case statGroups.staticCost:
          this.genArray(purchasereq).forEach(mat=>{
            inv[mat] += purchasereq[mat].amt;
          })
          break;
      }
      //TODO Provides and Storage increases
    });
    inv[cat][purchase].count+=1;
  }

  releaseSpace(amt:number,inv:Inventory) {
    inv.usedSpace -= amt;
  }

}
