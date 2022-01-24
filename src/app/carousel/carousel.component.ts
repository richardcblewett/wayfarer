import { Component, OnInit } from '@angular/core';
import {locations} from "../locations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  //images = [1047, 134, 1043].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [locations[0].image,
    locations[1].image,
    locations[2].image,
    locations[3].image
  ]
  cities = locations;
  constructor() { }

  ngOnInit(): void {
  }

}
