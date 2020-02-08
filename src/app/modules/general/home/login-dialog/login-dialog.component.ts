import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/http/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  public submit(username, password) {
    if (username === '' || password === '') {

    } else {
      this.loginService.login(username, password).subscribe(user => {
        this.loginService.activeUser = user;
        this.loginService.loggedIn = true;
        console.log(this.loginService.activeUser);
      });
    }
    this.dialogRef.close();
  }
}
