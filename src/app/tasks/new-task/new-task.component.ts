import { Component, input, output, signal } from '@angular/core';
import { NewTaskData, Task } from "../../helper/task.model";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  isCancelClick = output<void>();
  addNewTask = output<NewTaskData | Task>();
  openAddNewTask = input<string>();

  title = input<string>('your title');
  summary = input<string>('your description');
  dueDate = input<string>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');


  closeAddTask() {
    this.isCancelClick.emit();
  }

  onSubmit() {
    this.addNewTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    });
  }
}
