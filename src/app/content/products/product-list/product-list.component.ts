import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  productSelected: Product;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.addProduct
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
  }

  selectProduct(product: Product) {
    this.productService.productSelected.emit(product);
  }

  ngOnDestroy() {
    // console.log("ProductListComponent destroyed!");
  }
}
