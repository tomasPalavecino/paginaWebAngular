import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../models/Product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productsList: IProduct[] = [];
  private _apiService = inject(ApiService);

  constructor(){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productsList = data;
    })
  }

}
