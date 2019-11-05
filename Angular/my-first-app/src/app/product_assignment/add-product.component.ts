import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  item = "apple";
  title:string = "Product Title";
  product = new Product();
  newP = new Product();
  product_list = [];
  visible = true;

  editIndex = -1;

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
  updateItem(index){
    // console.log(index);
    this.product = this.product_list[index];
    this.editIndex = index;
  }
  editItem(){
    if(this.editIndex !== -1)
    {  
      this.product_list[this.editIndex] = this.product;
      this.editIndex = -1;
      this.product = new Product();
    }
  }

}
