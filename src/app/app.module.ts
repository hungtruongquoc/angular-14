import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/:id', component: RecipeItemComponent},
  {path: 'login', component: ShoppingListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
