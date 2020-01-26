import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from 'src/app/modules/general/home/login-dialog/login-dialog.component';
import {LoginService} from '../http/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  username: string;

  constructor(private loginDialog: MatDialog, private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  public showLoginDialog() {
    const dialogRef = this.loginDialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (this.loginService.user.isLogged === true) {
        this.username = this.loginService.user.username;
        this.isLogged = this.loginService.user.isLogged;
        console.log(this.loginService.user.isLogged);
      }

    });
  }


}
