import { Component, OnInit } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.css']
})
export class OnlineStoreComponent implements OnInit {

  model: Model = new Model();

  constructor() { }

  ngOnInit() {
  }

  getClass(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  selectedProduct: string;
  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

}
