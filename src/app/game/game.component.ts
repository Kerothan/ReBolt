import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Inventory } from '../models/inventory';
import { Core } from '../models/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //instantiate models
  invList: string[];
  core: Core = new Core();
  
  //timer to tick resources every second
  private source = timer(1000,1000);
  private subscribe;
  
  constructor(private gameSvc: GameService) {
    
  }

  ngOnInit() {
    this.invList = this.gameSvc.genArray(this.gameSvc.inv.mats);
    this.subscribe = this.source.subscribe(() => this.gameSvc.tick());
  }

  reInit(){
    this.gameSvc.init();
  }

}
