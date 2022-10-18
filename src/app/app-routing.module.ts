import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { UserManagementEditComponent } from './module/user-management/user-management-edit/user-management-edit.component';
import { UserManagementViewComponent } from './module/user-management/user-management-view/user-management-view.component';

const routes: Routes = [{ path: '', component: DashboardComponent, pathMatch: "full" },
{ path: 'userManagement', component: UserManagementViewComponent },
{
  path: 'userManagement', children: [{ path: "new", component: UserManagementEditComponent },
  { path: "edit/:id", component: UserManagementEditComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
