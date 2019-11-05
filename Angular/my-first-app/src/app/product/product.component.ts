import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../shared/models/product';
import { DiscountPipe } from '../shared/pipe/discount.pipe';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  item = "apple";
  title:string = "Product Title";
  product = new Product();
  newP = new Product();
  product_list = [];
  visible = true;

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    // this.item = val;
    // console.log(this.item);
    // this.product_list.push(val);
    // console.log(this.product_list);
    // console.log(this.item);
    // this.item = "Default";
    // let newP = new Product();
    //this.disPrice = this.discountPrice(this.product.price,0.1);
    let newP = {...this.product};
    //this.dis = new DiscountPipe().transform(this.product.price,0.1);
    // newP.name = this.product.name;
    // newP.description = this.product.description;
    // newP.stock = this.product.stock;
    // newP.price = this.product.price;
    // newP.createDate = this.product.createDate;

    this.product_list.push(newP);
    // this.product.name = "";
    // this.product.description = "";
    // this.product.stock = undefined;
    // this.product.price = undefined;
    // this.product.createDate = new Date("yyyy-MM-dd");
    this.product = new Product();
    console.log(this.product_list);
    // this.product.name = "";
    // this.product.description = "";

    // this.product.stock = 0;
    // this.product.price = 0;
  }

  toggleList(){
    this.visible = !this.visible;
  }

}
