import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { Core } from 'src/app/models/core';
import { Units } from 'src/app/models/units';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  @Input() inv: Inventory;
  @Input() core: Core;
  @Input() unit: Units;
  
  droneCost:number = 2;
  droneSpace:number = .5;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Validates whether or not the Construct Drone button should be active
   */
  buyDroneValid():boolean {
    if (this.droneCost <= this.inv.rawMats 
      && this.droneSpace <= this.core.space-this.core.usedSpace) return true;
    else return false;
  }

  /**
   * Adds a drone at the cost of mats and space
   */
  buyDrone() {
    this.inv.rawMats -= this.droneCost;
    this.unit.counts.drones += 1;
    this.core.useSpace(.5);
  }
}
