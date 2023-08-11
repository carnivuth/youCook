import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/database.service';
import { Ingridient } from '../model/Ingredient';
import { Step } from '../model/Step';
import { Recipe } from '../model/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

constructor(private route: ActivatedRoute , private db:DatabaseService) {}
  public ingredients?:Ingridient[]
  public steps?:Step[]
  public recipe?:Recipe
  
  ngOnInit(){
    var id = this.route.snapshot.paramMap.get('id');
    this.db.getRecipesIngredients(id as string).subscribe(res=>{
      this.ingredients=res as Ingridient[];
    })
    this.db.getRecipesSteps(id as string).subscribe(res=>{
      this.steps=res as Step[];
    })

    this.db.getRecipe(id as string).subscribe(res=>{
      this.recipe=res as Recipe;
    })

  }
}
