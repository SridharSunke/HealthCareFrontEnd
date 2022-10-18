import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestAdminServiceService {

  constructor(private http: HttpClient) { }

  makeRestCall(path: string, type: string, data: any): any {
    let baseURL = "";
    switch (type) {
      case "GET":
        return this.http.get(baseURL + path).pipe();

      case "POST":
        return this.http.post(baseURL + path, data).pipe();

      default:
        break;
    }
  }
}



