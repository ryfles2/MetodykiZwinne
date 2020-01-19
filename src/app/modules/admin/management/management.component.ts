import { Component, OnInit, ViewChild } from '@angular/core';
import { Locker } from 'src/app/shared/models/locker';
import { LockersService } from 'src/app/core/http/lockers.service';
import { MatSnackBar } from '@angular/material';

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
  rightsMatrix = [
    {id: 1, name: 'Keys'},
    {id: 2, name: 'Errors'},
    {id: 3, name: 'Users'},
    {id: 4, name: 'Diagrams'}
  ];
  usersTabs = ['User', 'Keys', 'Errors', 'Users', 'Diagrams'];
  @ViewChild('actionSelect', {static: false}) actionSelectRef;
  actionSelectValue: number;

  constructor(public lockerService: LockersService,
              public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getLockersData();
  }

  public updateLocker(id: number, state: number) {
    console.log('ID ---> ' + id);
    console.log('STATE ---> ' + state);
    this.lockerService.updateLocker(id, state).subscribe((data) => {
      this.snackBar.open('Locker has been updated successfully', null, {duration: 2000});
      this.getLockersData();
    },
    (error) => {
      this.snackBar.open('Something went wrong while performing this operation..', null, {duration: 2000});
      console.log(error);
    });
  }

  private getLockersData() {
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
