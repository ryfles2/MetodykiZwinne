import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from 'src/app/modules/general/home/login-dialog/login-dialog.component';
import {LoginService} from '../http/login.service';
import {Router} from '@angular/router';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private loginDialog: MatDialog, public loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  public showLoginDialog() {
    const dialogRef = this.loginDialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {

      });

  }


}
