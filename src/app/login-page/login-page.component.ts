import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyService } from '../verify.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private _varify:VerifyService , private route:Router){

  };
  ngOnInit(): void {
  }


  loginId= "";
  Password= "";
  tocken = 0;
  title = 'Login Page';


  // submit(){
  //   console.log(this.loginId);
  //   console.log(this.Password);
    
  //   const result = this._varify.varify(this.loginId , this.Password);
  //   console.log(result)
  //   if(result == true){
  //     this.tocken = 1;
  //     setTimeout(()=>{
  //       this.tocken = 0;
  //     },2000);

  //     console.log("login Successful");
  //     this.loginId="";
  //     this.Password = "";  
  //     this.route.navigate(['/homePage']);

  //   }else{
  //     console.log("failed to login");
  //     this.tocken = 2;
  //     setTimeout(()=>{
  //       this.tocken=0;
  //     },2000);
  //   }
  // }

  submit(){
    // console.log(this.loginId);
    // console.log(this.Password);
    this._varify.set(this.loginId);
    this._varify.hrp().subscribe(
      (data: any[]) => {
          let success = false;
          let i = 0;
          // console.log(data)
          // with using foreach loop
          data.forEach((i: { login: string; password: string; }) => {
            if(i?.login == this.loginId && i?.password == this.Password){
                    console.log("login")
                    this.tocken = 1;

                    console.log("login Successful");
                    this.loginId="";
                    this.Password = ""; 
                    success = true; 
                    setTimeout(()=>{
                       this.tocken = 0;
                       this.route.navigate(['/homePage']);
                    },500);
                  }
          });
          // with using while loop for multiple object in server
          // while(data != null && i< data.length){
          //     if(data[i]?.login == this.loginId && data[i]?.password == this.Password){
          //       console.log("login")
          //       // this.tocken = 1;

          //       // setTimeout(()=>{
          //       //    this.tocken = 0;
          //       // },2000);
        
          //       console.log("login Successful");
          //       this.loginId="";
          //       this.Password = ""; 
          //       success = true; 
          //       this.route.navigate(['/homePage']);
          //       break;
          //     }
          //     i++;
          // }
          console.log(success);
          if(success == false){
            console.log("failed")
              console.log("failed to login");
                  this.tocken = 2;
                  setTimeout(()=>{
                    this.tocken=0;
                  },2000);
          }



// for single object in server
        // if(data.login == this.loginId && data.password == this.Password){
        //   console.log("login")
        //   this.tocken = 1;
        //       setTimeout(()=>{
        //         this.tocken = 0;
        //       },2000);
        
        //       console.log("login Successful");
        //       this.loginId="";
        //       this.Password = "";  
        //       this.route.navigate(['/homePage']);
          
        // }else{
        //   console.log("failed")
        //   console.log("failed to login");
        //       this.tocken = 2;
        //       setTimeout(()=>{
        //         this.tocken=0;
        //       },2000);
        // }
      },
      (err: any)=>{
          console.log(err);
      }
    )

  }
  
}
