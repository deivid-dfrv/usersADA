import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  arrayUsers: User[] = [];
  
  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
        this.arrayUsers = data;
      }  )  
  }
}
