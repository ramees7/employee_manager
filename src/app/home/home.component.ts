import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  empCount:any=[]
  adminUsername:any=""
  constructor(private admin:AdminService , private r:Router){
    const adminData:any=sessionStorage.getItem("adminDetails")
    this.adminUsername=JSON.parse(adminData).username
  }
  ngOnInit() {
    this.getEmpCount()
  }

  getUSername(e:any){
    console.log(e);
    this.adminUsername=e   
  }
  
  getEmpCount(){
    this.admin.getEmployeeDetails().subscribe((res:any)=>{
      this.empCount=res.filter((item:any)=>item.id != "1").length
      console.log(this.empCount)
    })
  }
  handleLogout(){
    // localStorage.clear()
    sessionStorage.clear()
    this.r.navigateByUrl('/')
  }
}
