import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from "./helper/dummy-users";
import { User } from "./helper/user.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  user: User;
  selectedUserId: string;

  onSelectUser(id: string) {
    this.user = this.users.find(user => user.id === id);
    this.selectedUserId = this.user.id;
  }
}
