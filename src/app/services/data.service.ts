import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/Category.model';
import { IProduct } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private BASE_URL= 'https://api.escuelajs.co/api/v1'
  private MY_PRIVATE_API='http://localhost:5255/api'

  constructor(private http:HttpClient) { }

  //get all categories
  getCategories():Observable<ICategory[]>{
return this.http.get<ICategory[]>(`${this.MY_PRIVATE_API}/Category`)
  }
//get all products
getProducts():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(`${this.MY_PRIVATE_API}/Product`)
}

//get single product
getProductById(id:number):Observable<IProduct>{
  return this.http.get<IProduct>(`${this.MY_PRIVATE_API}/Product/${id}`)
}

}
