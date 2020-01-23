import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GitUsersService {
  constructor(private http: HttpClient) { }
// Method is used to get the all the users available in the github
  getAllGitHubUsers() {
    return this.http.get(environment.apiUrl + 'users?since=135').pipe(map((users: any[]) => {
      return users.map(user => {
        return {
          userName: user['login']
        }
      })
    }));
  }
// Method is used to get the all the repositories available for the user in the github
  getRepositoriesByUserID(userName) {
    return this.http.get(environment.apiUrl + `users/${userName}/repos`)
      .pipe(map((repositories: any[]) => {
        return repositories.map(user => {
          return {
            repositoryName: user['name']
          }
        })
      }));
  }
}
