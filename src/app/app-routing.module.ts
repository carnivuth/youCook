import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'recipes', component: RecipesListComponent },
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
