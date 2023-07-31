import { Component,ElementRef,ViewChild } from '@angular/core';

declare var element:any;
declare var left:any;
declare var right:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor() { }

  ngOnInit() {


  }
   
  onleftclick()
    {
      let element=document.getElementById("element");
      const fimage=element?.querySelectorAll("img")[0].clientWidth;
      if (element && fimage) {
        element.scrollLeft -= fimage;
      }
      
    }
  

  onrightclick()
  {
    let element=document.getElementById("element");
    const fimage=element?.querySelectorAll("img")[0].clientWidth;
    if (element && fimage) {
      element.scrollLeft += fimage;
    }
}
}