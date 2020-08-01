import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getNumberByType(type: string):number{
    let count: number = 0;
    type = type.toLowerCase();
    for(let i=0; i<this.satellites.length; i++){
      let satelliteType = this.satellites[i].type.toLowerCase();
      if(satelliteType.indexOf(type) >=0){
        count++;
      }
    }
    return count;
  }
}
