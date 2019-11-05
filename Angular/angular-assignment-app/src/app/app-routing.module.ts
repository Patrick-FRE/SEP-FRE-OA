import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  {path: 'post', component: PostComponentComponent},
  {path: 'home', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [ReactiveFormComponent, ReactiveFormResponseComponent]
