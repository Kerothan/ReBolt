import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { buyCategories } from 'src/app/models/details';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private gameSvc:GameService) { }

  ngOnInit() {
  }

  /**
   * Validates whether or not the Construct Drone button should be active
   */
  buyDroneValid(item:string):boolean {
    return this.gameSvc.validateBuy(item,buyCategories.unit);
  }

  /**
   * Adds a drone at the cost of mats and space
   */
  buyDrone(item:string) {
    this.gameSvc.buy(item,buyCategories.unit);
  }
}
