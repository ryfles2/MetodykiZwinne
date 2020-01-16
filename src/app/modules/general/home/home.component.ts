import { Component, OnInit } from '@angular/core';
import { LockersService } from 'src/app/core/http/lockers.service';
import { Locker } from 'src/app/shared/models/locker';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  currentUser = 'Guest';
  availableLockers = 0;
  lockers: Locker[];

  constructor(private lockersService: LockersService,
              private spinner: NgxSpinnerService) {
    setInterval(() => {
      this.fireGetLockers();
    }, 3000);
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

  public fireGetLockers() {
    this.lockersService.getLockers().subscribe(
      data => {
        this.lockers = data;
        this.availableLockers = this.updateAvailableLockers(data);
      }
    );
  }

  public updateAvailableLockers(lockers: Locker[]) {
    return lockers.filter((locker) => {
      return locker.state == 1;
    }).length;
  }

}
