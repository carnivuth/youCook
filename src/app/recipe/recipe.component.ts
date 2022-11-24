import { Component, Input } from '@angular/core';
import { Recipe } from '../model/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input() recipe?:Recipe;
  
}
