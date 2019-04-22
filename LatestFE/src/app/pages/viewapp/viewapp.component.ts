import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.sass']
})
export class ViewappComponent implements OnInit {

  formid: any;
  allDt: any;
  constructor(private dp: DataService) {
  }

  ngOnInit() {
    this.formid = localStorage.formId;
    this.dp.getAppDt(this.formid).subscribe((x: any) => {

      for (let i = 0; i < x.table1.length; i++) {
        try {
          x.table1[i].tags = JSON.parse(x.table1[i].tags);
        } catch (e) {

        }
      }
      console.log(x);
      this.allDt = x.table1.slice(0, 200);
      document.getElementById('lding').style.display = 'none';
    })
  }

}
