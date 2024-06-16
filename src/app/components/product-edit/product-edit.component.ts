import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  product!: IProduct


  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, Validators.required],
    quality: [0, Validators.required],
    image: ['', Validators.required],
    description: ['']
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe(product => {
        this.form.patchValue(product);
        this.product = product
      })

    })
  }

  onSubmit() {
    if (this.form.valid)
      this.productService.updateProduct({ ...this.product, ...this.form.value } as IProduct).subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
