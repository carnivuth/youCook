import { EventEmitter, Injectable } from '@angular/core';
import { DatabaseService } from 'src/database.service';
import { Recipe } from './model/Recipe';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
private recipes?:Recipe[];
public recipesEvent:EventEmitter<Recipe[]>=new EventEmitter();
  constructor(private dbs:DatabaseService, private ss:SessionService ) { 
    this.recipes=this.dbs.getUser(this.ss.getUsername())?.recipies;
  }
  public getRecipes(){
    return JSON.parse(JSON.stringify(this.recipes));

  }
  public addRecipes(r:Recipe ){
    this.recipes?.push(r);
   
    this.recipesEvent.emit(this.recipes);
    
  }
}
