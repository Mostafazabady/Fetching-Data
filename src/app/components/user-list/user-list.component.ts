import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  loading = true;
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  Math: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({ next:(response)=>{
      this.users = response;
      this.filteredUsers = response;
      this.loading = false;
      console.log(response);
      
    }
      
    });
  }

  search(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }
}







