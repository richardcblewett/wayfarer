import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';

@Component({
  selector: 'app-nav-cities',
  templateUrl: './nav-cities.component.html',
  styleUrls: ['./nav-cities.component.css']
})
export class NavCitiesComponent implements OnInit {

  cities: any = locations;
  constructor() { }

  ngOnInit(): void {
  }

}
