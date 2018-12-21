import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private source = timer(1000,1000);
  private subscribe = this.source.subscribe(() => this.tick())

  private coreLvl: number = 1;
  private rawMat: number = 0;
  private rawMatMax: number = 100;
  private rawMatperTick: number = 1;
  private droneCount: number = 0;
  private power: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  tick () {
    if (this.rawMat < this.rawMatMax) {
      if (this.rawMat + this.rawMatperTick > this.rawMatMax)
        this.rawMat = this.rawMatMax;
      else this.rawMat += this.rawMatperTick
    }
  }
}
