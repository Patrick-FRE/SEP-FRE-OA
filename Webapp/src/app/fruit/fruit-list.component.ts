import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Fruit } from '../model/fruit';
import { FruitComponent } from './fruit.component';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruitList = [];
  freshCounter = 0;
  rottenCounter = 0;
  newFruit = new Fruit(2, "Guava", true);
  @ViewChildren(FruitComponent) fruitComponent: QueryList<FruitComponent>;

  constructor() { }

  ngOnInit() {
    this.fruitList.push(new Fruit(1, "orange", false));
    this.fruitList.push(new Fruit(1, "apple", false));
    this.fruitList.push(new Fruit(1, "banana", false));
    this.fruitList.push(new Fruit(1, "pineapple", false));
    this.fruitList.push(new Fruit(1, "waxapple", false));
  }

  updateCounters(input: boolean) {
    if(input){
      this.freshCounter++;
    } else {
      this.rottenCounter++;
    }
    console.log(this.fruitComponent.toArray());
  }

}
