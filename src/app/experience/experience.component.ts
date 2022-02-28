import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private clipboard: Clipboard, private _snackBar:MatSnackBar) { }

  copyEmail() {
    this.clipboard.copy("carloscor998@gmail.com");
    this._snackBar.open("¡Copiaste mi email!", 'x', { horizontalPosition: "end", verticalPosition: "top", duration: 1000})
  }

  ngOnInit(): void {
  }

}
