import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  private products: Product[];
  productsChanged = new Subject<Product[]>();

  // productSelected = new EventEmitter<Product>();
  // // addProduct = new EventEmitter<Product[]>();
  // addProductEvent = new Subject<Product[]>();

  constructor() {
    this.products = [
      new Product('23423424', 'test name', 'test name description'),
      new Product('234234214', 'test name1', 'test name description1')
    ];
  }

  public getProducts() {
    return this.products.slice();
  }

  public getProduct(index: number) {
    return this.products[index];
  }

  public pushProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  public updateProduct(i: number, prodcut: Product) {
    this.products[i] = prodcut;
    this.productsChanged.next(this.products.slice());
  }

  public deleteProduct(i: number) {
    this.products.splice(i, 1);
    this.productsChanged.next(this.products.slice());

  }

}
