import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products!: IProduct[]

  constructor(
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }
  removeProduct(id: number) {
    if(confirm('Are u sure??'))
    this.productService.deleteProductById(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}
