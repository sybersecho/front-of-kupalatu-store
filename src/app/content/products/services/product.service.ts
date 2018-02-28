import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Injectable()
export class ProductService {
  private products: Product[];
  productSelected = new EventEmitter<Product>();
  addProduct = new EventEmitter<Product[]>();

  constructor() { 
  	this.products = [
	  	new Product('23423424', "test name", 'test name description'), 
	  	new Product('234234214', "test name1", 'test name description1')
	  ];
  }

  public getProducts(){
  	return this.products.slice();
  }

  public pushProduct(product: Product){
  	this.products.push(product);
  	this.addProduct.emit(this.products.slice());
  }

}
