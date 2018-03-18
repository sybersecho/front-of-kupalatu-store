import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.addProductEvent
      .subscribe(
        (products: Product[]) => {
          this.products = products;
          console.log('add product');
        }
      );
  }

}
