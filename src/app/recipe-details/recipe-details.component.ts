import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

constructor(private route: ActivatedRoute , private db:DatabaseService, private router:Router) {}
  public ingredients?:Ingridient[]
  public steps?:Step[]
  public recipe?:Recipe
  public id?:string;
  
  ngOnInit(){
     this.id = this.route.snapshot.paramMap.get('id')as string;
    this.db.getRecipesIngredients(this.id as string).subscribe(res=>{
      this.ingredients=res as Ingridient[];
    })
    this.db.getRecipesSteps(this.id as string).subscribe(res=>{
      this.steps=res as Step[];
    })

    this.db.getRecipe(this.id as string).subscribe(res=>{
      this.recipe=res as Recipe;
    })

  }
  public  deleteRecipe() {
    this.db.deleteRecipe(this.id as string).subscribe(res=>{
      alert("ricetta eliminata dal database");
      this.router.navigate(["/"]);
    });
  }
  public annotations(){
    
  }
}
