import { HttpClient } from '@angular/common/http';
import { Component, Input  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  sp:boolean=true;
    eye:boolean=true;

     email:string="";
    password:string="";
    confirmpassword:string="";
  previouspassword: string="";
    constructor(private http:HttpClient,private sharedService:SharedService) 
    {
      // this.email=this.sharedService.getSharedEmail();
      // console.log(this.email);
      this.email=localStorage.getItem('email') as string;
     }

   save()
   {
    
    const data = {
      "previouspassword":this.previouspassword, // "previouspassword" is the key in the backend
      "password":this.password,
      "confirmpassword":this.confirmpassword,
      "email":this.email

     };

     this.http.post("http://localhost:3213/users/changepassword",data).subscribe((resultdata:any)=>{
      console.log(resultdata);
      alert("Password reset successfully");
      localStorage.removeItem('email');
    });
  }
   

    x()
    {
      this.sp=!this.sp;
      this.eye=!this.eye;
    }

}
