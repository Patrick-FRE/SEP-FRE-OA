import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {
  item1_counter = 0;
  item2_counter = 0;
  constructor() { }

  ngOnInit() {
  }

  updateCounter(id){
    if(id === 1)
      this.item1_counter++;
    else
      this.item2_counter++;
  }

}
