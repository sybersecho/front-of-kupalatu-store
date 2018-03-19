import { Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../product.model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  @ViewChild('f') private form: NgForm;
  private isEdit = false;
  id: number;

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.clear();
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if (this.id >= 0) {
            this.product = this.productService.getProducts()[this.id];
            this.isEdit = true;
            // this.bindProductToView();
          }
        }
      );
    // this.productService.productSelected
    //   .subscribe(
    //     (product: Product) => {
    //       this.product = product;
    //     }
    //   );
  }

  onClear() {
    this.clear();
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      const newProduct: Product = new Product(f.value['txtBarcode'],
        f.value['txtName'],
        f.value['txaDescription']
      );
      if (this.isEdit) {
        this.productService.updateProduct(this.id, newProduct);
      } else {
        this.productService.pushProduct(newProduct);
      }
      this.router.navigate(['/products']);
    }
    this.clear();
  }

  private clear() {
    this.product = new Product('', '', '');
  }

  bindProductToView() {
    this.form.value['txtBarcode'] =  this.product.barcode;
    this.form.value['txtName'] =  this.product.name;
    this.form.value['txaDescription'] =  this.product.description;
  }
}
