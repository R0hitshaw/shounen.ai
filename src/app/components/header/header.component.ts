import { Component, Input } from '@angular/core';
import {faBars} from  '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faBars=faBars
  
 @Input() isusercomponent:boolean |undefined;
  
 log()
 {
  sessionStorage.removeItem('token');
 }
}
