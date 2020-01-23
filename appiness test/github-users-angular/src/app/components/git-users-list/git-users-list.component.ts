import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitUsersService } from 'src/app/services/git-users-service.service';

@Component({
  selector: 'app-git-users-list',
  templateUrl: './git-users-list.component.html',
  styleUrls: ['./git-users-list.component.css']
})
export  class GitUsersListComponent implements OnInit {
  UsersList: IUser[] = [];
  searchText: string = '';
  constructor(private gitUsersService: GitUsersService, private router: Router) { }

  ngOnInit() {
    this.getAllGitHubUsers();
  }
  getAllGitHubUsers() {
    this.gitUsersService.getAllGitHubUsers().subscribe(users => {
      this.UsersList = users;
    })
  }
  gotoUserRepository(userName: number) {
    this.router.navigate([`user/${userName}/repositoriesdetails`])
  }
}
interface IUser {
  userName: string
}
