import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Inventory } from '../models/inventory';
import { Maximum } from '../models/maximums';
import { Core } from '../models/core';
import { Tick } from '../models/tick';
import { GameService } from '../services/game.service';

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
  ticker: Tick = new Tick();

  //timer to tick resources every second
  private source = timer(1000,1000);
  private subscribe = this.source.subscribe(() => this.ticker.tick(this.inventory,this.max))
  
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
  }

}
