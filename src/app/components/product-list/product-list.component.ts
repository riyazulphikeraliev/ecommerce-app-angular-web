import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products?:IProduct[];

  constructor(private dataService:DataService,private router:Router){
    this.dataService.getProducts().subscribe((response:IProduct[])=>{
      this.products=response;
    })
  }
OnButtonClicked(product:IProduct){
  this.router.navigate(['products-detail',product.productId])
}
 

}
