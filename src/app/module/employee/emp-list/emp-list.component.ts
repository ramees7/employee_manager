import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  constructor(private admin: AdminService, private toastr: ToastrService) {
  }
  ngOnInit() {
    this.getEmpList()
  }

  // employees:any=[]
  empList: any = []
  dateNow: any = new Date()
  searchtext: any = ""

  getEmpList() {
    this.admin.getEmployeeDetails().subscribe((res: any) => {
      console.log(res);
      this.empList = res.filter((item: any) => item.id != "1")
      console.log(this.empList);

    })
  }
  handleDelete(id: any) {
    this.admin.deleteEmployeeDetails(id).subscribe((res: any) => {
      this.toastr.success("Employee Deleted")
      this.getEmpList()
    }, (err: any) => {
      this.toastr.error("Failed")
    })
  }

  exportToPdf() {
    let doc = new jsPDF()
    let head = [['EmpId', 'Username', 'email', 'status']]
    let body: any = []
    this.empList.forEach((item: any) => {
      body.push([item.empId, item.Username, item.email, item.status])
    })
    doc.setFontSize(16)
    doc.text("All Employee List", 10, 10)
    autoTable(doc, {
      head, body
    })
    doc.output("dataurlnewwindow")
    doc.save("allemployees.pdf")
  }

  sortByUserID() {
    this.empList.sort((user1: any, user2: any) => user1.empId - user2.empId)
  }


  sortByUsername() {
    this.empList.sort((user1: any, user2: any) => user1.username.localeCompare(user2.username))
  }
}


