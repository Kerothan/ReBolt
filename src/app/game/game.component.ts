import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Inventory } from '../models/inventory';
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
  core: Core = new Core();
  ticker: Tick;
  
  //timer to tick resources every second
  private source;
  private subscribe;
  
  constructor(private gameSvc: GameService) {
    this.ticker = new Tick(gameSvc);
    this.source = timer(1000,1000);
    this.subscribe = this.source.subscribe(() => this.ticker.tick(this.inventory));
  }

  ngOnInit() {
  }

}
