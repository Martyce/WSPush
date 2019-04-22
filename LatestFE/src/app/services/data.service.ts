import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: any;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:49847/api/main/get1"
  }

  getData() {
    return this.http.get("http://localhost:49847/api/main/GetData");
  }

  getAppDt(val:any){
    return this.http.get("http://localhost:49847/api/main/GetAppID/"+val);
  }

  insertData(val:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post("http://localhost:49847/api/main/InsertData", JSON.stringify(val), options);
  }

  deleteApp(val: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post("http://localhost:49847/api/main/DeleteApp", JSON.stringify(val), options);
  }

}
