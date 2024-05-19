import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.sass'
})
export class RecipeListComponent {
  constructor(private router: Router) {}

  goBackToLogin() {
    console.log('goBackToLogin');
    this.router.navigate(['/login']);
  }
}
