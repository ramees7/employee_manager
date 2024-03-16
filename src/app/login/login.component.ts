import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toastr: ToastrService ,private admin:AdminService , private r:Router) {

  }
  email:string=""
  password:string=""

  login(){
    if(this.email && this.password){
      this.admin.getAdminDetails().subscribe((res:any)=>{
        // console.log(res)
        if(res.email===this.email && res.password===this.password){
          this.toastr.success("success")
          const adminUser=JSON.stringify(res)
          // sessionStorage.setItem("adminUser",adminUser)
          sessionStorage.setItem("adminDetails",adminUser)
          this.r.navigateByUrl("/home")
        }
        else{
          this.toastr.error("inavlid email/password")
        }
      })
    }
    else{
      this.toastr.info("Error")
    }
  }
}
