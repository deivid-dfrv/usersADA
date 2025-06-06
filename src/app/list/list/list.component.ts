import { Component, EventEmitter } from '@angular/core';
import { User } from '../../interface/user';
import { UsersService } from '../../services/users.service';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-list',
  imports: [SearchComponent, SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  arrayUsers: User[] = [];
  arrayUsersAux: User[] = [];
  
  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
        this.arrayUsers = data;
        this.arrayUsersAux = this.arrayUsers ;
      }  )  
  }

  searchUser($event: string) {
     let nameUser = $event;
     console.log(nameUser);

     if (nameUser !== '') {
       this.arrayUsers = this.arrayUsers.filter((user: User) => {
        return user.name.toLowerCase().includes(nameUser.toLowerCase());
        });
  
        if (this.arrayUsers.length === 0) {
          this.arrayUsers = this.arrayUsersAux;
        } 

      } else {
        this.arrayUsers = this.arrayUsersAux;
      }
     }
}
