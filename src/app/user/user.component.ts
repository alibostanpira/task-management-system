import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "../helper/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user: User;
  @Input({ required: true }) selected: boolean;

  get imgPath() {
    return '/user/' + this.user.avatar;
  }

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
