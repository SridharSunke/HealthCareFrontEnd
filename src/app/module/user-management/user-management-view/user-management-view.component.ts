import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAdminServiceService } from 'src/app/service/rest-admin-service.service';

@Component({
  selector: 'app-user-management-view',
  templateUrl: './user-management-view.component.html',
  styleUrls: ['./user-management-view.component.scss']
})
export class UserManagementViewComponent implements OnInit {

  userSearchForm: any;
users: any;
departments : any;
  constructor(private formBuilder: FormBuilder, private restadminService: RestAdminServiceService,
    private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.userSearchForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      departmentId:''
    });
    this.getDepartments();
  }

  searchUsers() {
    this.http.get("http://localhost:8081/all").subscribe(data => {
      console.log(data);
      this.users= data;
    }, error => alert('error'));
  }

  searchUsersPost() {
    this.http.post("http://localhost:8081/criteria", this.userSearchForm.value).subscribe(data => {
      console.log(data);
      this.users= data;
    }, error => alert('error'));
  }

  getDepartments(){
    this.http.get("http://localhost:8081/department/getall").subscribe(data => {
      console.log(data);
      this.departments= data;
    }, error => alert('error'));
  }
  deleteUser(data: any){
    this.http.delete("http://localhost:8081/delete",{body : data,responseType:"text"}).subscribe(data => {
      console.log(data);
      this.searchUsers();
    }, error => alert('error'));
  }
  editUser(data: any){
    this.router.navigate(["/userManagement","edit",data.id]);
  }
}
