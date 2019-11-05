import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-add-product',
  templateUrl: './product-add-product.component.html',
  styleUrls: ['./product-add-product.component.css']
})
export class ProductAddProductComponent implements OnInit {

  item = "apple";
  title:string = "Product Title";
  product = new Product();
  newP = new Product();
  product_list = [];
  visible = true;

  index = -1;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.cur_cast.subscribe(product => this.product = product);
    this.productService.cast.subscribe(product_list => this.product_list = product_list);
    this.productService.index_cast.subscribe(index => this.index = index);
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
    this.productService.updateList(this.product_list);
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
  // updateItem(index){
  //   // console.log(index);
  //   this.product = this.product_list[index];
  //   this.editIndex = index;
  // }
  editItem(){
    // console.log(this.index);
    if(this.index !== -1)
    {  
      this.product_list[this.index] = this.product;
      this.productService.updateList(this.product_list);
      this.index = -1;
      this.product = new Product();
    }

  }

}
