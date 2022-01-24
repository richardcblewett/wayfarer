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
  postId: string|null = '';
 

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = POSTS.find(post => {
        let postId: string = params.get("id") || "";
        return post.id === parseInt(postId);
      });
    });
  }
  checkTitle(title: string){
    if(title.length < 1 || title.length > 200){
      return "This is not a valid title";
    }else{
      return title;
    }
  }
  checkContent(content: string){
    if(content){
      return content
    }else;
    {
      return "This post is not valid";
    } 
  }
}
