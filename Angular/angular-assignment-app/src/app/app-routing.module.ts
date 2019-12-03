import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostComponent } from './post/components/post/post.component';


const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'home', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [ReactiveFormComponent, ReactiveFormResponseComponent]
