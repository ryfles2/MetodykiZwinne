import { Component, OnInit } from '@angular/core';
import {LockersService} from "../../../core/http/lockers.service";
import {ErrorsService} from "../../../core/http/errors.service";
import {Locker} from "../../../shared/models/locker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-locker-troubles',
  templateUrl: './locker-troubles.component.html',
  styleUrls: ['./locker-troubles.component.less']
})
export class LockerTroublesComponent implements OnInit {

  lockersAvailable: Locker[];
  constructor(private lockerService: LockersService,
              private errorsService: ErrorsService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.lockersAvailable = [];
    this.lockerService.getLockers().subscribe(lockers => {
      this.lockersAvailable = lockers;
    });
  }

  public submit(lockerId, message) {
    this.errorsService.addError(message, 0, lockerId).subscribe(data => {
      this.snackbar.open('Your message has been sent! Thank you',null, {duration: 2000});
    });
  }

}
