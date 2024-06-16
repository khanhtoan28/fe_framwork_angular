import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
product!:IProduct
form= this.formBuilder.group({
  name:['',[Validators.required, Validators.minLength(3)]],
  price:[0,Validators.required],
  quality:[0,Validators.required],
  image:['',Validators.required],
  description:[''],
})
constructor(
  private productService: ProductService,
  private formBuilder: FormBuilder,
  private router: Router
){}

onSubmit(){
  if(this.form.valid)
this.productService.addProduct(this.form.value as IProduct).subscribe(()=>{
  this.router.navigate(['/'])
  alert('Đăng ký thành công')
})
}
}
