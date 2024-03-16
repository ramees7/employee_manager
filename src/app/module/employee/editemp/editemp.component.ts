import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { userSchema } from '../../model/userschema';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit{
  id:string=""
  user:userSchema={}
  constructor(private aroute:ActivatedRoute,private admin:AdminService,private toastr:ToastrService ,private router:Router){
    this.aroute.params.subscribe((res:any)=>{
      console.log(res);
      this.id=res.id
      console.log(this.id);
      
    })
  }
  ngOnInit() {
    this.admin.getSpecifiedEmployee(this.id).subscribe((res:any)=>{
      console.log(res);
      
      this.user.empId=res.empId
      this.user.email=res.email
      this.user.username=res.username
      this.user.status=res.status

    })
  }
  getEditedData(){
    console.log(this.user);
    const {empId,username,email,status}=this.user
    if(empId && username && email && status){
      this.admin.editEmployeeDetails(this.user,this.id).subscribe((res:any)=>{
        console.log(res);
        this.toastr.success("Employee Updation Success")
        this.router.navigateByUrl("/employee")
      },
      (err:any)=>{
        this.toastr.error("Updation failed")
      })
    }
    else{
      this.toastr.info("Enter Valid Data !")
    }
    
  }
}
