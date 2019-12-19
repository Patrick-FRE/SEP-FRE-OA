import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '../model/fruit';


@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  @Input()fruit: Fruit;
  @Output()statusChanged = new EventEmitter<boolean>();
  
  constructor() { 

  }

  ngOnInit() {
  }

  changeStatus(status: boolean){
    this.fruit.isFresh = status;
    this.statusChanged.emit(status);
  }

}
