import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { DatabaseService } from 'src/database.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipes?:Recipe[];
  constructor(private db:DatabaseService ){
  }
  ngOnInit(): void {
    
 
    this.db.getRecipes().subscribe(res=>{
      this.recipes=res as Recipe[];
    });
  }
  

}
