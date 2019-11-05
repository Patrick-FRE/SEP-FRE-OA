import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormResponseComponent } from './product/reactive-form-response.component';
import { ReactiveFormComponent } from './product/reactive-form.component';



const routes: Routes = [
  {path: 'formResponse', component: ReactiveFormResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReactiveFormComponent, ReactiveFormResponseComponent]