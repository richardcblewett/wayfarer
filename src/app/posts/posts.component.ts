import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //loren ipsem generated stuff?
  title: string = '';
  text: string = '';
  date: number = 0;
  city: string = ''; //one of the cities

  constructor() { }

  ngOnInit(): void {
  }

}
