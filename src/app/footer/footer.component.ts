import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private clipboard: Clipboard, private _snackBar:MatSnackBar) { }

  copyEmail() {
    const email = $('#email').text();
    this.clipboard.copy(email);
    this._snackBar.open("¡Copiado!", 'x', { horizontalPosition: "end", verticalPosition: "bottom", duration: 1000})
  }

  copyPhone() {
    const phone = $('#phone').text();
    this.clipboard.copy(phone);
    this._snackBar.open("¡Copiado!", 'x', { horizontalPosition: "end", verticalPosition: "bottom", duration: 1000})
  }

  ngOnInit(): void {
  }

}
