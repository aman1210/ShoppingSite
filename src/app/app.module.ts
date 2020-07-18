import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store';


import {AppRoute} from './app-route.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BannerComponent } from './homescreen/banner/banner.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import * as fromApp from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BannerComponent,
    HomescreenComponent,
    FooterComponent,
    CategoriesComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoute,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
