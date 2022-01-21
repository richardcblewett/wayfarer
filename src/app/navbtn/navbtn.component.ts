import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';

@Component({
  selector: 'app-navbtn',
  templateUrl: './navbtn.component.html',
  styleUrls: ['./navbtn.component.css']
})
export class NavbtnComponent implements OnInit {
  isCollapsed = true;
  cities = locations;
  constructor() { }

  ngOnInit(): void {
  }

}
