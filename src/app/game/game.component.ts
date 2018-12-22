import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Inventory } from '../models/inventory';
import { Maximum } from '../models/maximums';
import { Core } from '../models/core';
import { Units } from '../models/units';
import { Tick } from '../models/tick';
import { Structures } from '../models/structures';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //instantiate models
  inventory: Inventory = new Inventory();
  max: Maximum = new Maximum();
  core: Core = new Core();
  units: Units = new Units();
  ticker: Tick = new Tick();
  structures: Structures = new Structures();

  //timer to tick resources every second
  private source = timer(1000,1000);
  private subscribe = this.source.subscribe(() => this.ticker.tick(this.inventory,this.max))
  
  constructor() { }

  ngOnInit() {
  }

  buy(item:string){
    let purchase;
    if(!!this.structures.stats[item]) purchase = this.structures;
    if(!!this.units.stats[item]) purchase = this.units;
    this.inventory.invTypes.forEach(x=>{
      if(!!purchase.stats[item].invCost[x]){
        this.inventory[x]-=purchase.stats[item].invCost[x];
      }
    });
    purchase.counts[item]+=1;
  }

}
