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

  ngOnInit(): void {
  }

}
