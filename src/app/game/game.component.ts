import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Inventory } from '../models/inventory';
import { Maximum } from '../models/maximums';
import { Core } from '../models/core';
import { Units } from '../models/units';
import { Tick } from '../models/tick';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //instantiate models
  private inventory: Inventory = new Inventory();
  private max: Maximum = new Maximum();
  private core: Core = new Core();
  private units: Units = new Units();
  private ticker: Tick = new Tick();

  //timer to tick resources every second
  private source = timer(1000,1000);
  private subscribe = this.source.subscribe(() => this.ticker.tick(this.inventory,this.max))
  
  constructor() { }

  ngOnInit() {
  }

}
