import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.sass'
})
export class RecipeItemComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  selectedId: number;

  ngOnInit() {
    this.selectedId = this.route.snapshot.params['id'];
    console.log(`Item id ${this.route.snapshot.params['id']}`)
  }
}
