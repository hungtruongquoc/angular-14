import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeListComponent} from "./components/recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./components/recipes/recipe-list/recipe-item/recipe-item.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {authGuard} from "./core/guards/auth-guard/auth.guard";
import {LoginSectionComponent} from "./components/login-section/login-section.component";

const routes: Routes = [
  // {path: '', component: RecipesComponent},
  // Redirects the user to the /recipes route if the route is empty.
  // The pathMatch: 'full' option is required to make sure that the route is empty
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, canActivate: [authGuard],
    children: [
      {path: '', component: RecipeListComponent},
      {path: ':id', component: RecipeItemComponent},
    ]
  },
  {path: 'login', component: LoginSectionComponent},
  // Passes static data to a component of a route
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page cannot be found!'}},
  // Redirects the user to the /not-found route if the route doesn't match any of the above routes
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
