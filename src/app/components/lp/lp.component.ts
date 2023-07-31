import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-lp',
  templateUrl: './lp.component.html',
  styleUrls: ['./lp.component.css']
})
export class LpComponent {
  faUser=faUser
  
  constructor(private http:HttpClient,private router:Router) { }

  email:string="";
  password:string="";

  islogin:boolean=false;

  errmsg:string="";

  show=false;
  ngOnInit() {
    
  }
  vp:boolean=true;
  visible:boolean=true;

  view()
  {
    this.vp=!this.vp;
    this.visible=!this.visible;
  }

  login()
  {

    let bodydata = {
      "email":this.email,
      "password":this.password
    };

    this.http.post("http://localhost:3213/users/login",bodydata).subscribe((resultdata:any)=>{
      console.log(resultdata);

      sessionStorage.setItem("token",resultdata.status);
      if(resultdata.status)
      {
        this.router.navigate(['/uac']);
      }
      else
      {
        alert("Invalid Credentials");
      }
 
  });
  }
  
}
