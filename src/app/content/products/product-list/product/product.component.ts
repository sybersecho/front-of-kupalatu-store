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
  @ViewChild('barcodeInput') barcodeInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('descriptionInput') descriptionInput: ElementRef;
  // @Output() saveEvent = 
  // saveProductEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.clear();
  	this.productService.productSelected
  		.subscribe(
  			(product: Product) => {
  				this.product = product;
  			}
  		);
  }

  onClear(){
  	this.clear();
  }

  onSave(){  	
  	const newProduct: Product = new Product(this.getValueOfElementRef(this.barcodeInput), 
  		this.getValueOfElementRef(this.nameInput), 
  		this.getValueOfElementRef(this.descriptionInput));
  	
  	this.productService.pushProduct(newProduct);

  	this.clear();
  	
  }

  private clear(){
  	this.product = new Product('','','');
  }

  private getValueOfElementRef(element: ElementRef){
  	const elementSting:string = element.nativeElement.value;
  	return elementSting;
  }

}
