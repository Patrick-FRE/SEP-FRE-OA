import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product_list: any[];
  @Output() selectEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  editItem(p:Product){
      // console.log(p);
      this.selectEvent.emit(p);
  }


}
