import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id:string;
//   name:string;
//   avatar:string;
// };
interface User{
  id:string;
  name:string;
  avatar:string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select2 = new EventEmitter();
  // select2 = output<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select2.emit(this.user.id)
  }

}
