import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from './posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']

})
export class PostsComponent implements OnInit {

  //loren ipsem generated stuff?
  
  post: any;
  posts= POSTS;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
