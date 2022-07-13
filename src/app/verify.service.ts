import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataI } from './dataI';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  private _url = '/assets/data.json';

  constructor(private http : HttpClient) { }
  hrp(): Observable<dataI[]>{
    return this.http.get<dataI[]>(this._url);
  }
  login:string = "";
  get(){ 
    return this.login;
  }
  set(id:any){
    this.login = id;
  }
  
  // Id = "";
  // password = "";
  // varify(id:any , Password:any){
  //   console.log(id+" from service " + Password)
  //   this.Id = id;
  //   this.password = Password;
  //   this.hrp().subscribe({
  //     next:(data) => {
  //       this.logindata = data;
  //       console.log(this.logindata)
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }

  //   });
   

  // }

  // vary(){
  //    console.log(this.Id+ "  "+ this.password)
  //   if(this.Id == this.logindata?.login && this.password == this.logindata?.password){
     
  //     return true;
  //   }else{
  //   return false;
  //   }
  // }



}

