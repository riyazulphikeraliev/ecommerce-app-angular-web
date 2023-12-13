import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/Product.model';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id :any;
  product?: IProduct
  constructor(private dataService: DataService,private activatedRoute:ActivatedRoute) {
   this.id= this.activatedRoute.snapshot.paramMap.get('id')
    this.dataService.getProductById(this.id).subscribe((response: IProduct) => {
      this.product = response;
    })
  }

}
