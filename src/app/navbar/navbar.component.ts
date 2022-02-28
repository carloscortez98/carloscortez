import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar) { }

  showAlert() {
    this._snackBar.open("¡Próximamente!", 'x', { horizontalPosition: "end", verticalPosition: "top", duration: 1000})
  }

  ngOnInit(): void {
  }

}
