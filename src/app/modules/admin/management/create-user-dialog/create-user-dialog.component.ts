import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/http/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.less']
})
export class CreateUserDialogComponent implements OnInit {

  constructor(private userService: UserService,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<CreateUserDialogComponent>) {
  }

  rightsMatrix = [
    {id: 1, name: 'Low'},
    {id: 2, name: 'Mid'},
    {id: 3, name: 'High'},
    {id: 4, name: 'Full'}
  ];

  ngOnInit() {
  }

  public submit(login, password, rights) {
    console.log(login);
    console.log(password);
    console.log(rights);
    if (login && password && rights) {
      this.userService.addUser(login, password, rights).subscribe(data => {
        this.snackBar.open('User has been created successfully', null, {duration: 2000});
        this.dialogRef.close();
      }, error => {
        this.snackBar.open('Something went wrong..', null, {duration: 2000});
        this.dialogRef.close();
      });
    } else {
      this.snackBar.open('You have to fill all of the fields!', null, {duration: 2000});
    }
  }
}
