import {Component, EventEmitter} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  products: Product[];

  constructor() {
    this.products = [
      new Product("Test", "name123", "/assets/images/products/black-shoes.jpg", ["Men", "Shoes"], 109.99),
      new Product("Test2", "name456", "/assets/images/products/black-shoes.jpg", ["Women", "Shirts"], 98.88),
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product selected: ', product);
  }
}
