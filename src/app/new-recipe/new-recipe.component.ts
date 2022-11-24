import { Component } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
 public name?:string;
 public description?:string;
 
  constructor(private rs:RecipesService){

 }
 public addRecipe(){
  if(this.name!=null && this.description!=null){
    let r=new Recipe();
    r.name=this.name;
    r.description=this.description;
    this.rs.addRecipes(r);

  }
 }
}
