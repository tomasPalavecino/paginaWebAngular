import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/Product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute, private _apiService: ApiService){}

  // ngOnInit(): void {
  //   setTimeout(() =>{
  //     this._route.params.subscribe(param =>{
  //       this.product = this.productList.find(product => product.id == param['productId']);
  //       this.color = this.product?.price as number > 5 ? 'red' : '';
  //       this.loading = false;
  //     });
  //   }, 1500);
  // }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) =>{
        this._apiService.getProductsById(Number(params['productId'])).subscribe({
          next: (data: IProduct) =>{
              this.product = data;
              this.color = this.product?.price as number > 200 ? 'red' : '';
              this.loading = false;
          },
          error: (error: any) =>{
            console.log(error);
            this.loading = false;
          }
        })
      }
    })
  }

}
