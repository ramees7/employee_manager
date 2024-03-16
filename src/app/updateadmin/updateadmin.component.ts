import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit{

  profilePicture:string="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  profileStatus:boolean=false
  adminData:any={}
  @Output() adminChangeEvent:any=new EventEmitter()

  constructor(private admin:AdminService,private toastr:ToastrService){

  }
  ngOnInit() {
    this.getAdminData()
  }
  adminProfileStatus(){
    this.profileStatus=true
  }

  getAdminData(){
    this.admin.getAdminDetails().subscribe((res:any)=>{
      this.adminData=res
      console.log(this.adminData);
      if(res.profileImage){
        this.profilePicture=res.profileImage
      }
    })
  }

  getFile(event:any){
    const file=event.target.files[0]
    console.log(file)
    let fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.profilePicture=event.target.result
      this.adminData.profileImage=event.target.result
    }
  }

  handleUpdateAdmin(){
    console.log(this.adminData);
    this.admin.updateAdmin(this.adminData).subscribe((res:any)=>{
      this.toastr.success("Admin Updated")
      const updatedData=JSON.stringify(res)
      sessionStorage.setItem("adminDetails",updatedData)
      this.adminChangeEvent.emit(this.adminData.username)
    },
    (err:any)=>{
      this.toastr.error(err)
    })
    
  }
  onCancel(){
    this.profileStatus=false
  }
}
