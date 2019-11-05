import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { CoreComponentComponent } from './core-component/core-component.component';
import { LimitLengthPipe } from './shared/pipes/limit-length.pipe';
import { ModalComponent } from './backdrop/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PostComponentComponent,
    CoreComponentComponent,
    LimitLengthPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
