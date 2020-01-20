import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CartComponent } from './components/cart/cart.component';


const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/:productId",
    component: ProductComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path:"cart",
    component: CartComponent
  }


];





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot(),
    BrowserAnimationsModule,
    FilterPipeModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
