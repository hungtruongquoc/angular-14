import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.sass'
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  selectedId: number;
  paramsSubscription: Subscription;

  ngOnInit() {
    // this.selectedId = this.route.snapshot.params['id'];
    // console.log(`Item id ${this.route.snapshot.params['id']}`)

    // The subscription below is automatically unsubscribed when the component is destroyed
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
      console.log(`Item id ${params['id']}`)
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.paramsSubscription.unsubscribe();
  }
}
