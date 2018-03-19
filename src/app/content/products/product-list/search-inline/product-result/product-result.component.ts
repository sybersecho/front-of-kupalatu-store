import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription: Subscription;

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit(i: number) {
    this.router.navigate([i], {relativeTo: this.activatedRoute});
  }

  onDelete(i: number) {
    this.productService.deleteProduct(i);
  }

}
