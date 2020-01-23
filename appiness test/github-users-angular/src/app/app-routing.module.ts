import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersListComponent } from './components/git-users-list/git-users-list.component';
import { GitUserRepositoriesComponent } from './components/git-user-repositories/git-user-repositories.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: GitUsersListComponent },
  { path: 'user/:name/repositoriesdetails', component: GitUserRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
