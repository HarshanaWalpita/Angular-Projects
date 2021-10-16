import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';

const routes: Routes = [
  {
    path:'',
    component: ManageUserComponent
  },
  {
    path:'manage-user',
    component: ManageUserComponent
  },
  {
    path:'create-user',
    component: CreateUserComponent
  },
  {
    path:'**',
    component: ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
