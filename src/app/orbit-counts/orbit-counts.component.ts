import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
import { element } from 'protractor';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  typeArray: string[] = [];
  constructor() { 
  }

  checkDebris(): number {
    let debrisTotal : number = 0;
    this.satellites.forEach(element => {
      if (element.shouldShowWarning()) {
        debrisTotal++;
      }
    });
    return debrisTotal;
  }

  countType( type: string ): number {
    let typeTotal: number = 0;
    this.satellites.forEach(element => {
      if (element.type.toLowerCase() === type.toLowerCase()) {
        typeTotal++;
      }
    });
    return typeTotal;
  }

  addTypesToArray(satellites: Satellite[]): void {
    satellites.forEach(element => {
      let newType: boolean = false;
      if (!this.typeArray.includes(element.type)) {
        this.typeArray.push(element.type);
        newType=true;
      }
    });
  }

  checkIfNewType(satellite: Satellite) : boolean {
    let newType: boolean = false;
    if (!this.typeArray.includes(satellite.type)) {
      this.typeArray.push(satellite.type);
      newType=true;
    }
    return newType;
  }

  clearTypeArray(): void {
    this.typeArray = [];
  }

  ngOnInit(): void {
  }

}
