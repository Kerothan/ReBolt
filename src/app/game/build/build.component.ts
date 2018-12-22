import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Structures } from 'src/app/models/structures';
import { Inventory } from 'src/app/models/inventory';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  @Input() structures: Structures;
  @Input() inv: Inventory
  @Output() buyOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  validateBuy(struct:string):boolean{
    let valid: boolean = true;
    this.inv.invTypes.forEach(item=>{
      if (!!this.structures.stats[struct].invCost[item]){
        if (this.structures.stats[struct].invCost[item]>this.inv[item]) valid=false;
      }
    })
    return valid
  }

  buy(item:string){
    this.buyOutput.emit(item);
  }

}
