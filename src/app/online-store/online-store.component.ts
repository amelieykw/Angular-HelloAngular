import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  // add new Product
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  // verify form optimization - errors
  getValidationMessage(state: any, thingName?: string) {
    let hostOfError: string = state.path || thingName;
    let message: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            message.push(`You must enter a ${hostOfError}.`);
            break;
          case 'minlength':
            message.push(`A ${hostOfError} must be at least ${state.errors['minlength'].requiredLength}.`);
            break;
          case 'pattern':
            message.push(`the ${hostOfError} contains illegal characters.`);
            break;
        }
      }
    }
    return message;
  }

  // verify form by NgForm
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
