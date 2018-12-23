import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory';
import { statGroups } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  genArray(obj):any[]{
    return Object.keys(obj).map(key=>{return key})
  }

  validateBuy(purchase:string,inv:Inventory):boolean{
    let valid: boolean = true;
    if (purchase != 'drones' && inv.builds.drones.count==0) return false;
    this.genArray(inv.builds[purchase]).forEach(stat=>{
      let purchasereq=inv.builds[purchase][stat];
      switch (stat){
      case statGroups.invCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>inv[mat]) {
            valid = false
          };
        })
        break;
      case statGroups.unitCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat]>inv.builds[mat].count) {
            valid = false
          };
        })
        break;
      case statGroups.staticCost:
        this.genArray(purchasereq).forEach(mat=>{
          if (purchasereq[mat].amt>(inv[purchasereq[mat].res]-inv[purchasereq[mat].amt]))
            valid= false;
        })
        break;
      }
    });
    return valid;;
  }

  buy(purchase:string,inv:Inventory){
    this.genArray(inv.builds[purchase]).forEach(stat=>{
      let purchasereq=inv.builds[purchase][stat];
      switch (stat){
        case statGroups.invCost:
          this.genArray(purchasereq).forEach(mat=>{
            inv[mat] -= purchasereq[mat];
          })
          break;
        case statGroups.unitCost:
          this.genArray(purchasereq).forEach(mat=>{
            inv.builds[mat].count -= purchasereq[mat];
            if (!!inv.builds[mat].staticCost.usedSpace)
              this.releaseSpace(inv.builds[mat].staticCost.usedSpace.amt,inv);
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
    inv.builds[purchase].count+=1;
  }

  releaseSpace(amt:number,inv:Inventory) {
    inv.usedSpace -= amt;
  }

}
