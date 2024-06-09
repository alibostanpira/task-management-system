import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Task } from "../../helper/task.model";
import { NewTaskComponent } from "../new-task/new-task.component";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NewTaskComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input<Task>();
  title: string;
  summary: string;
  dueDate: string;
  updateCurrentTask = 'Update Task';
  updateTask = output<Task>();
  isUpdateClicked = false;
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }

  onUpdateTask() {
    this.isUpdateClicked = true;
    this.title = this.task().title;
    this.summary = this.task().summary;
    this.dueDate = this.task().dueDate;
  }

  onClickCancelTask() {
    this.isUpdateClicked = false;
  }

  onSubmitTask(newTask: Task) {
    this.isUpdateClicked = false;
    newTask.id = this.task().id;
    newTask.userId = this.task().userId;
    this.updateTask.emit(newTask);
  }
}
