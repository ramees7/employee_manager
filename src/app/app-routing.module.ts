import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authguardGuard } from './guard/authguard.guard';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule) ,canActivate:[authguardGuard]},

  
  {path:'',component:LoginComponent},

  {path:'home',component:HomeComponent,canActivate:[authguardGuard]},


  {path:'**',redirectTo:''}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
