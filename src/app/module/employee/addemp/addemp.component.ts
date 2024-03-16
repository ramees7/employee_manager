import { Component } from '@angular/core';
import { userSchema } from '../../model/userschema';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  constructor(private admin:AdminService , private toastr:ToastrService , private r:Router){

  }
  user:userSchema={}

  cancel(){
    this.user.empId=""
    this.user.email=""
    this.user.status=""
    this.user.username=""
    this.r.navigateByUrl("/employee")
  }

  getAddedData(){
    console.log(this.user);
    this.admin.addEmployeeDetails(this.user).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success("Employee Added")
      this.cancel()
      // this.r.navigateByUrl("/employee")

    },
    (err)=>{
      console.log(err);
      this.toastr.error("Employee Adding Failed")

    })
    
  }
  
}
