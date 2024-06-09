import { Component, computed, input, output } from '@angular/core';
import { DUMMY_TASKS } from "../helper/dummy-tasks";
import { User } from "../helper/user.model";
import { NewTaskData, Task } from "../helper/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = DUMMY_TASKS;

  user = input.required<User>();
  imgPath = computed(() => '/user/' + this.user().avatar);
  addTaskFromTasks = 'Add New Task';
  isNewTaskClick = false;


  get selectedTasksForUser() {
    return this.tasks.filter((task) => task.userId === this.user().id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onClickAddTask() {
    this.isNewTaskClick = true;
  }

  onClickCancelTask() {
    this.isNewTaskClick = false;
  }

  onSubmitTask(newTaskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user().id,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate,
    });
    this.isNewTaskClick = false;
  }

  onUpdateTask(newTask: Task) {
    this.tasks = this.tasks.filter((task) => task.id !== newTask.id);
    this.tasks.push(newTask);
  }
}
