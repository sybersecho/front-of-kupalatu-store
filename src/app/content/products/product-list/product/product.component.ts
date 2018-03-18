import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  @ViewChild('txtBarcode') txtBarcode: ElementRef;
  @ViewChild('txtName') txtName: ElementRef;
  @ViewChild('txaDescription') txaDescription: ElementRef;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.clear();
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

  onSubmit() {
    this.onSave();
  }

  onSave() {
    const newProduct: Product = new Product(this.getValueOfElementRef(this.txtBarcode),
      this.getValueOfElementRef(this.txtName),
      this.getValueOfElementRef(this.txaDescription)
    );
    this.productService.pushProduct(newProduct);
      this.clear();
    }

  private clear() {
    this.product = new Product('', '', '');
  }

  private getValueOfElementRef(element: ElementRef) {
    const elementSting: string = element.nativeElement.value;
    return elementSting;
  }

}
