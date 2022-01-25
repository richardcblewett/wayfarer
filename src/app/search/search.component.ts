import {Component, OnInit} from '@angular/core';
import {POSTS} from "../cities/posts/posts";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  posts = POSTS;
  search: string = '';
  matchingPosts:any = [];

  constructor() { }

  ngOnInit(): void {
  }
  //When this is connected to a database this will allow you to search for posts
  findPost(search: string){
    this.matchingPosts = [];
    //console.log(search);
    this.posts.forEach(post => {
      if (post.title.includes(search) || post.description.includes(search)) {
        this.matchingPosts.push(post);
      }
    });
    //console.log(this.matchingPosts);
  }
}
