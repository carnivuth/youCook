import { EventEmitter, Injectable } from '@angular/core';
import { users } from './app/dbmock';
import { User } from './app/model/User';
import { Recipe } from './app/model/Recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private users: User[] = users;
  private recipes?: Recipe[];
  
  //APIS
  private base: string = 'http://localhost:8039/';
  private urlRecipes: string = this.base + 'recipes';

  constructor(private _http:HttpClient) {}
  public getRecipes() {
    return this._http.get(this.urlRecipes)  
  }
  public getRecipesIngredients( id:String) {
    return this._http.get(this.urlRecipes+"/"+id+"/ingredients");  
  }

  public getRecipe( id:String) {
    return this._http.get(this.urlRecipes+"/"+id);  
  }
  public getRecipesSteps( id:String) {
    return this._http.get(this.urlRecipes+"/"+id+"/steps");  
  }

}
