import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'src/app/verify.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  dataGet:any;
  constructor(private _varify:VerifyService){}
  login = "";
  ngOnInit(): void {
    this._varify.hrp().subscribe(
      (data)=>{
        this.dataGet = data
      },
      (err)=>{
        console.log(err);
      }
    )
    this.login = this._varify.get().slice(0,1);
    }

}
