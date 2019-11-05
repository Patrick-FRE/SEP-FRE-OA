import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  clicked = false;
  @Input() item1:string;
  @Input() item2:string;
  @Output() selectEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  selectItem(id:number){
    this.selectEvent.emit(id);
    this.clicked = true;
  }

}
