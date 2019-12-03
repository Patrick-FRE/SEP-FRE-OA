import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ProductComponent } from './product/product.component';
import { DiscountPipe } from './shared/pipe/discount.pipe';
import { ColorChangeDirective } from './shared/directives/color-change.directive';
import { VoteComponent } from './vote/vote.component';
import { VoteResultComponent } from './vote/vote-result.component';
import { AddProductComponent } from './product_assignment/add-product.component';
import { ProductListComponent } from './product_assignment/product-list.component';
import { ProductParentComponent } from './product_assignment_bonus/product-parent.component';
import { ProductAddProductComponent } from './product_assignment_bonus/product-add-product.component';
import { ProductProductListComponent } from './product_assignment_bonus/product-product-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { LimitLengthPipe } from './shared/pipe/limit-length.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductComponent,
    DiscountPipe,
    ColorChangeDirective,
    VoteComponent,
    VoteResultComponent,
    AddProductComponent,
    ProductListComponent,
    ProductParentComponent,
    ProductAddProductComponent,
    ProductProductListComponent,
    PostListComponent,
    LimitLengthPipe,
    routingComponents,
    LikeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
