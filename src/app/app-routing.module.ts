import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './_pages/home';
import { LoginComponent } from './_pages/login';
import { RegisterComponent } from './_pages/register';
import { AuthGuard } from './_helpers';
import { CreateUserComponent } from './_pages/create-user/create-user.component';
import { UserAssignmentComponent } from './_pages/user-assignment/user-assignment.component';
import { CreateTemplateComponent } from './_pages/create-template/create-template.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-management/create-request', component: CreateUserComponent },
  { path: 'user-management/user-assignment', component: UserAssignmentComponent },
  { path: 'template-management/create-template', component: CreateTemplateComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
