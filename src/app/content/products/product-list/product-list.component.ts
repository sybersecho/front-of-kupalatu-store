import { Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  productSelected: Product;
  @ViewChild('btnAddProduct') btnAddProduct;

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: Product) {
    this.productService.productSelected.emit(product);
  }

  onAddProduct() {
    // TODO find best way to hide the button
    // this.btnAddProduct.nativeElement.hidden = true;
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  saveProductEvent() {
    console.log('save product event');
  }

  ngOnDestroy() {
    console.log('ProductListComponent destroyed!');
  }
}
