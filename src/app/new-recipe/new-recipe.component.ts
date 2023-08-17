import { Component } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { Ingridient } from '../model/Ingredient';
import { DatabaseService } from 'src/database.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent {
  public name?: string;
  public description?: string;
  public instructions?: string;
  public quantity?: string;
  public ingredient?: string;
  public ingredients: Ingridient[] = [];
  public suggestions: Ingridient[] = [];
  public constructor(private db: DatabaseService) {}
  
  public addRecipe() {
    if (this.name != null && this.name!="" &&
      this.description != null && this.description!= "" &&
      this.instructions!=null && this.instructions!= "" &&
      this.ingredients.length!=0 ) {
      let r = new Recipe();
      r.name = this.name;
      r.description = this.description;
      r.instructions=this.instructions;
      r.ingredients=this.ingredients;
      this.db.addRecipe(r).subscribe(res=>{
        alert('la ricetta e stata aggiunta');
        this.name='';
        this.ingredients=[];
        this.description='';
        this.instructions='';

      });
    }
  }

  public suggestIngredients() {
    if (this.ingredient != undefined && this.ingredient != '') {
      this.suggestions=[];
      this.db.getIngredients(this.ingredient).subscribe(res=>{
        this.suggestions=res as Ingridient[];
      });
    }
  }

  public addIngredient() {
    var i: Ingridient = new Ingridient();
    if (
      this.ingredient != undefined &&
      this.quantity != undefined &&
      this.ingredient != '' &&
      this.quantity != ''
    ) {
      i.name = this.ingredient;
      i.quantity = this.quantity;
      this.ingredients?.push(i);
      this.ingredient="";
      this.quantity="";
    }
  }
}
