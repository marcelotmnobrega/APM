import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  products: IProduct[];
  filteredProducts: IProduct[];

  //prop
  _filterCriteria: string;
  get filterCriteria(): string {
    return this._filterCriteria;
  }
  set filterCriteria(value: string) {
    this._filterCriteria = value;
    this.filteredProducts = this.filterCriteria ? this.performFilter(this.filterCriteria) : this.products;
  }

  //Injecting productService
  constructor(private productService: ProductService) {}

  performFilter(filterCriteria: string): IProduct[] {
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterCriteria.toLocaleLowerCase()) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    )
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}