import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { GameService } from 'src/app/services/game.service';
import { buyCategories } from 'src/app/models/details';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  @Input() inv: Inventory

  constructor(private gameSvc: GameService) { }

  ngOnInit() {
  }

  buy(item:string){
    this.gameSvc.buy(item,this.inv,buyCategories.struct);
  }

  validateBuy(item:string):boolean{
    return this.gameSvc.validateBuy(item,this.inv,buyCategories.struct);
  }

  isCat(cat:string,check:string):boolean{
    if (cat==check) return true;
    return false;
  }
  
}
