import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface newTask{
  title:string;
  summary:string;
  date:string;
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<newTask>();
  enterTitle = '';
  enterSummary ='';
  enterDate ='';
  onClose(){
    this.close.emit()
  }
  onSubmit(){
    this.add.emit({title : this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDate,
    })
  }
}
