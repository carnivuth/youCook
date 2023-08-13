import { Injectable } from '@angular/core';
import { Recipe } from './app/model/Recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private recipes?: Recipe[];

  //APIS
  private base: string = 'http://localhost:8039/';
  private urlRecipes: string = this.base + 'recipes';
  private urlIngredients: string = this.base + 'ingredients';

  constructor(private _http: HttpClient) {}
  public getRecipes() {
    return this._http.get(this.urlRecipes);
  }
  public getRecipesIngredients(id: String) {
    return this._http.get(this.urlRecipes + '/' + id + '/ingredients');
  }

  public getRecipe(id: String) {
    return this._http.get(this.urlRecipes + '/' + id);
  }
  public getRecipesSteps(id: String) {
    return this._http.get(this.urlRecipes + '/' + id + '/steps');
  }
  public getIngredients(query: String) {
    return this._http.get(this.urlIngredients + '/' + query);
  }
  public addRecipe(recipe: Recipe) {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this._http.post(this.urlRecipes + '/new', JSON.stringify(recipe), {
      headers,
    });
  }
}
