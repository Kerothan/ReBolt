import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { Core } from 'src/app/models/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
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

  constructor() { }

  ngOnInit() {
  }

  buyDroneValid():boolean {
    if (this.droneCost < this.inv.rawMats) return true;
    else return false;
  }
  buyDrone() {
    this.inv.rawMats -= this.droneCost;
    this.unit.drones += 1;
  }
}
