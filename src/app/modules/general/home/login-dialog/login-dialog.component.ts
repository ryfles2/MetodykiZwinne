import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/http/login.service';
import { CustomMaterialModule } from '../../../custom-material/custom-material.module';

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
    this.loginService
      .getLoginStatus([username, password])
      .subscribe(status => {
        if(status === 'Success') {
          this.loginService.user.username = username;
          this.loginService.user.isLogged = true;
        }
      },
      error => {
        console.log('Error!');
      });
    this.dialogRef.close();
  }
}
