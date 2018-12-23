import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { Core } from 'src/app/models/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  @Input() inv: Inventory;
  @Input() core: Core;
  
  constructor(private gameSvc:GameService) { }

  ngOnInit() {
  }

  /**
   * Validates whether or not the Construct Drone button should be active
   */
  buyDroneValid(item:string):boolean {
    return this.gameSvc.validateBuy(item,this.inv);
  }

  /**
   * Adds a drone at the cost of mats and space
   */
  buyDrone(item:string) {
    this.gameSvc.buy(item,this.inv);
  }
}
