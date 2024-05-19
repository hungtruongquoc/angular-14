import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.sass'
})
export class ShoppingListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  reloadList(){
    // this.router.navigate(['login'], {relativeTo: this.route});
  }
}
