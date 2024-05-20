import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Output() logOutClicked = new EventEmitter<void>();

  constructor() {
    console.log('HeaderComponent constructor');
  }

  emitLogOutClicked() {
    this.logOutClicked.emit()
  }
}
