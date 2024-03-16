import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url="https://emp-mang-server.onrender.com"
  // base_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAdminDetails(){
    return this.http.get(`${this.base_url}/employees/1`)
  }

  addEmployeeDetails(data:any){
    return this.http.post(`${this.base_url}/employees`,data)
  }

  getEmployeeDetails(){
    return this.http.get(`${this.base_url}/employees`)
  }

  getSpecifiedEmployee(id:any){
    return this.http.get(`${this.base_url}/employees/${id}`)
  }
  editEmployeeDetails(data:any,id:any){
    return this.http.put(`${this.base_url}/employees/${id}`,data)
  }
  deleteEmployeeDetails(id:any){
    return this.http.delete(`${this.base_url}/employees/${id}`)
  }

  updateAdmin(data:any){
    return this.http.put(`${this.base_url}/employees/1`,data)
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("adminDetails")
  }
}
