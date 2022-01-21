import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics = [{
    title: "First Topic",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer. Ac ut consequat semper viverra nam libero justo laoreet."
  }, 
  {
    title: 'Second Topic',
    description: "Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Integer eget aliquet nibh praesent. Placerat duis ultricies lacus sed. In arcu cursus euismod quis viverra nibh. Lacus viverra vitae congue eu consequat ac felis."
  },{
    title: 'Third Topic',
    description: " Suscipit tellus mauris a diam maecenas sed enim. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Sem integer vitae justo eget magna fermentum iaculis eu non. Volutpat lacus laoreet non curabitur."}
] 
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
