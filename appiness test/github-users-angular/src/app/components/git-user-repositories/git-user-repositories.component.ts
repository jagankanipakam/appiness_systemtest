import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { GitUsersService } from 'src/app/services/git-users-service.service';
@Component({
  selector: 'app-git-user-repositories',
  templateUrl: './git-user-repositories.component.html',
  styleUrls: ['./git-user-repositories.component.css']
})
export class GitUserRepositoriesComponent implements OnInit {
  repositoriesList: IRepository[] = [];
  userName: string = "";
  constructor(private gitUsersService: GitUsersService, private activeRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activeRoute.params.subscribe((param: ParamMap) => {
      this.userName = param['name'];
      this.getRepositoriesByUserID(this.userName);
    })
  }
  getRepositoriesByUserID(userName) {
    this.gitUsersService.getRepositoriesByUserID(userName).subscribe(repositories => {
      this.repositoriesList = repositories;
    })
  }
}
interface IRepository {
  repositoryName: string
}
