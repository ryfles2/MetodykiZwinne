import { Component, OnInit } from '@angular/core';
import { Locker } from 'src/app/shared/models/locker';
import { LockersService } from 'src/app/core/http/lockers.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  managementTabs = ['Number', 'State', 'Action'];
  statesMap = {
    1 : 'Free',
    2 : 'Busy'
  };
  lockers: Locker[];

  constructor(private lockerService: LockersService) { }

  ngOnInit() {
    this.lockerService.getLockers().subscribe(
      (data) => {
        this.lockers = data;
      },
      (error) => {
        console.log('Error while fetching lockers');
      }
    );
  }

}
