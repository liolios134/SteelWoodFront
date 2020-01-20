import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: any = [];

  @LocalStorage("cart")
  public cart;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private ls: LocalStorageService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.http.get("http://localhost:3000/products/" + params.productId)
        .subscribe(response => {
          this.product = response;
        });
    });


  }

  public addToCart(id: string) {
    if (!this.cart.includes(id)) {
      this.cart.push(id);
      this.cart = this.cart;
    }
  }

}
