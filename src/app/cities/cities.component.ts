import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from './posts/posts';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: any;
  posts = POSTS;

  constructor(private route: ActivatedRoute) { }
  findWeather(){
    console.log(this.city.name);
    
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = locations.find(city => {
        let paramId: string = params.get("id") || "";
        return city.id === parseInt(paramId);
      });
    });
  }
}
