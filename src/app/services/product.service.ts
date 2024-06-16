import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  Api_Url = 'http://localhost:3000/products/';

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Api_Url)
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.Api_Url + id)
  }

  deleteProductById(id: number): Observable<IProduct|{}> {
    return this.http.delete<IProduct|{}>(this.Api_Url + id)
  }

  addProduct(product:IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.Api_Url, product)
  }

  updateProduct(product:IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(this.Api_Url + product.id, product)
  }
}
