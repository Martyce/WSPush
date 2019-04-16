import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AppInt } from '../../models/appModel.interface';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  
  key: AppInt;
  appName: any;
  appKey: any;
  appID: any;
  allDt: any;
  constructor(private dp: DataService) { }

  ngOnInit() {
    this.dp.getData().subscribe((x:any)=>{
      console.log(x);
      this.allDt = x.table1;
    })
  }

  insertKey(){
    this.key = {
      AppName: this.appName,
      AppKey: this.appKey,
      AppID: this.appID
    }

    console.log(this.key);
    this.dp.insertData(this.key).subscribe((x:any)=>{
      console.log(x);
      this.allDt = x.table1;
    })

    this.appName = "";
    this.appID = "";
    this.appKey = "";
  }


  viewId(val:any){
    localStorage.formId = val;
  }

  deleteKey(val:any){
    this.dp.deleteApp(val).subscribe((x:any)=>{
      this.allDt = x.table1;
    })
  }

}

