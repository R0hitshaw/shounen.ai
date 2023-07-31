import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.css']
})
export class RpComponent {
  constructor(private dialogRef : MatDialog, private http:HttpClient,private router:Router)
  {}
  ngOnInit(): void {
  }
    openDialog()
    {
      this.dialogRef.open(PopupComponent,{height:'60%',width:'40%'});
    }
    f5()
    {
      alert("Your password has been reset successfully");
    }

    firstname:string="";
    lastname:string="";
    email:string="";
    password:string="";
    confirmpassword:string="";
    phonenumber:string="";
    gender:string="";
    country:string="";
    ischecked:boolean=false;

    register()
    {
      let bodydata = {
        "firstname":this.firstname,
        "lastname":this.lastname,
        "email":this.email,
        "password":this.password,
        "confirmpassword":this.confirmpassword,
        "phonenumber":this.phonenumber,
        "gender":this.gender,
        "country":this.country,
        "ischecked":this.ischecked
      
      };
      this.http.post("http://localhost:3213/users/register",bodydata).subscribe((resultdata:any)=>{

        console.log(resultdata);
        alert("Registered Successfully");
        this.router.navigate(['/lp']);
      });

    }

    save()
    {
      this.register();
    }

    sp:boolean=true;
    eye:boolean=true;

    x()
    {
      this.sp=!this.sp;
      this.eye=!this.eye;
    }
}
