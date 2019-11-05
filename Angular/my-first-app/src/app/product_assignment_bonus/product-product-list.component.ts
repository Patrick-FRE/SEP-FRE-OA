import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-product-product-list',
  templateUrl: './product-product-list.component.html',
  styleUrls: ['./product-product-list.component.css']
})
export class ProductProductListComponent implements OnInit {
  product_list = [];
  product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.cur_cast.subscribe(product => this.product = product);
    this.productService.cast.subscribe(product_list => this.product_list = product_list);
  }

  editItem(index){
    this.productService.updateItem({...this.product_list[index]},index);
  }
}
