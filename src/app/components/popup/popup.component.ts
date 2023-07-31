import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  faCircleXmark=faCircleXmark;
  constructor(private dialogref : MatDialog)
  {}
  closeDialog()
  {
    this.dialogref.closeAll()
  }
}
