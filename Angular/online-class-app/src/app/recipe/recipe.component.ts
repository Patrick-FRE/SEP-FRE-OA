import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple test','https://pixabay.com/get/51e5d0474e50b108f5d08460825668204022dfe054507741772c7ad6/andromeda-galaxy-755442_1280.jpg')
  ];
  constructor() {}

  ngOnInit() {
  }

}
