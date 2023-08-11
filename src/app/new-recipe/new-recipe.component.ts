import { Component } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { Ingridient } from '../model/Ingredient';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
 public name?:string;
 public description?:string;
 public instructions?:string;
 public quantity?:string;
 public ingredient?:string;
 public ingredients: Ingridient[] = [];

 public addRecipe(){
  if(this.name!=null && this.description!=null){
    let r=new Recipe();
    r.name=this.name;
    r.description=this.description;

  }
 }

 public suggestIngredients(){
 }

 public addIngredient(){
  var  i:Ingridient = new Ingridient;
  if(this.ingredient!=undefined && this.quantity!=undefined &&
    this.ingredient!="" && this.quantity!="" ){
    i.name=this.ingredient;
    i.quantity=this.quantity;
      this.ingredients?.push(i)
   }
  }
  
}
