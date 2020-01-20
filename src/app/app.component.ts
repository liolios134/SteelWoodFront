import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'steelwoodFront';

  constructor(
    private ls: LocalStorageService
  ) {}

  ngOnInit() {
    const cart = this.ls.retrieve('cart');
    if (cart === null) {
      this.ls.store('cart', []);
    }
  }

}
