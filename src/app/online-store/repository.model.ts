import { Product } from './product.model';
import { SimpleDataSource } from './datasouce.model';

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];
    private findProductLocatorById = (p: Product, id: number) => p.id === id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.findProductLocatorById(p, id));
    }

    saveProduct(product: Product) {
        if (product.id === 0 || product.id === null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            const index = this.products.findIndex(p => this.findProductLocatorById(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        const index = this.products.findIndex(p => this.findProductLocatorById(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
