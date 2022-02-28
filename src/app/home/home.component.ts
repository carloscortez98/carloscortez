import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar) { }

  downloadFile() {
    this._snackBar.open("¡Descargado!", 'x', { horizontalPosition: "end", verticalPosition: "top", duration: 1000})
  }

  ngOnInit(): void {
  }

}
