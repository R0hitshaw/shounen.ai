import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent {
  
  constructor(private http: HttpClient,private sharedService:SharedService) { }
   email:string ="";

   send()
   {
    const data = {
      "email":this.email
     };
     this.http.post("http://localhost:3213/users/resetpassword",data).subscribe((resultdata:any)=>{
      console.log(resultdata);
      alert("Password reset link sent to your email");
      // this.sharedService.setSharedEmail(this.email);
      localStorage.setItem('email',this.email);
    });
  }
   }
