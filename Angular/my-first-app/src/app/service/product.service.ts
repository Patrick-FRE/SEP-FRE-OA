import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cur_product = new BehaviorSubject<Product>(new Product());
  cur_cast = this.cur_product.asObservable();
  private product_list = new BehaviorSubject<Product[]>([]);
  cast = this.product_list.asObservable();
  private index = new BehaviorSubject<number>(-1);
  index_cast = this.index.asObservable();
  constructor() { }

  updateList(plist:Product[]){
      this.product_list.next(plist);
  }
  updateItem(p:Product,index:number){
    this.cur_product.next(p);
    this.index.next(index);
  }
}
