import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbtn',
  templateUrl: './navbtn.component.html',
  styleUrls: ['./navbtn.component.css']
})
export class NavbtnComponent implements OnInit {
  isCollapsed = false;
  cities= ["San Francisco", "London", "Sydney", "Seattle"]
  constructor() { }

  ngOnInit(): void {
  }

}
