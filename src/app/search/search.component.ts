import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  // When this is connected to an database this will allow you to search for posts
  findPost(search: string){
    {
      console.log(search);
    }
  }
}
