import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminServiceService } from 'src/app/service/rest-admin-service.service';

@Component({
  selector: 'app-user-management-edit',
  templateUrl: './user-management-edit.component.html',
  styleUrls: ['./user-management-edit.component.scss']
})
export class UserManagementEditComponent implements OnInit {
  userEditForm: any;
  departments: any;
  user: any;
  id: any;
  constructor(private formBuilder: FormBuilder, private restadminService: RestAdminServiceService,
    private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');


    this.userEditForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      departmentId: '',
      userName: '',
      password: ''
    });

    if (this.id) {
      this.http.get("http://localhost:8081/getUserById/" + this.id).subscribe(data => {
        console.log(data);
        this.userEditForm.setValue(new User(data));
      }, error => alert('error'));
    }
    this.getDepartments();
  }
  getDepartments() {
    this.http.get("http://localhost:8081/department/getall").subscribe(data => {
      console.log(data);
      this.departments = data;
    }, error => alert('error'));
  }
  saveUser() {
    var data = this.userEditForm.value;
    data.departmentId = { "id": data.departmentId };
    if (this.id) {
      data.id = this.id;
    }
    this.http.post("http://localhost:8081/update", data, { responseType: 'text' }).subscribe(data => {
      console.log(data);
      this.router.navigate(['/userManagement'])
    }, error => alert('error'));
  }
}
export class User {
  firstName: String;
  lastName: String;
  departmentId: String;
  userName: String;
  password: String
  constructor(options: any = {}) {
    this.firstName = options['firstName'];
    this.lastName = options['lastName'];
    this.departmentId = options['departmentId'] ? options['departmentId'].id : null;
    this.userName = options['userName'];
    this.password = options['password'];
  }
}