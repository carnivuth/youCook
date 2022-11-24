import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipes?:Recipe[];
  constructor(private rs:RecipesService ){
  }
  ngOnInit(): void {
   this.recipes=this.rs.getRecipes();
   this.rs.recipesEvent.subscribe(recipes=>{
    this.recipes=recipes
   })
  }
  

}
