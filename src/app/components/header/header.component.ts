import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Output() logOutClicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() showLogout:boolean = true;
  @Input() showLogin:boolean = true;

  constructor() {

  }

  emitLogOutClicked() {
    this.logOutClicked.emit()
  }
}
