import { Component, OnInit, ViewChild } from '@angular/core';
import { Locker } from 'src/app/shared/models/locker';
import { LockersService } from 'src/app/core/http/lockers.service';
import { MatSnackBar } from '@angular/material';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatisticsService } from 'src/app/core/http/statistics.service';
import { Statistic } from 'src/app/shared/models/statistic';
import { UserService } from 'src/app/core/http/user.service';
import { SpsUser } from 'src/app/shared/models/sps-user';
import {MatCheckbox} from "@angular/material/checkbox";
import {Observable} from "rxjs";

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
  lockers: Locker[] = [];
  statistics: Statistic[] = [];
  statisticsUsed: number[] = [];
  statisticsDay: string[] = [];

  rightsMatrix = [
    {id: 1, name: 'Low'},
    {id: 2, name: 'Mid'},
    {id: 3, name: 'High'},
    {id: 4, name: 'Full'}
  ];

  rightsMatrixMap = {
    1: 'Low',
    2: 'Mid',
    3: 'High',
    4: 'Full'
  };
  usersTabs = ['User', 'Rights'];
  users: SpsUser[];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] =  [this.statisticsDay];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.statisticsUsed, label: 'Visits' }
  ];

  constructor(public lockerService: LockersService,
              public statisticsService: StatisticsService,
              public userService: UserService,
              public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getLockersData();
    this.getStatistics();
    this.getUsers();
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
        console.log(data);
      },
      (error) => {
        console.log('Error while fetching lockers');
      }
    );
  }

  public getStatistics() {
    this.statisticsService.getStatistics().subscribe((data) => {
      this.statistics = data;
      console.log(data);
      this.statisticsDay = this.statistics.map(x => {
        return x['day'];
      });
      this.statisticsUsed = this.statistics.map(x => {
        return x['used'];
      });


      this.barChartLabels =  this.statisticsDay;
      this.barChartData = [
        { data: this.statisticsUsed, label: 'Lockers actions' }
      ];
    },
    (error) => {
      console.log('Error while fetching statistics');
    });
  }

  private getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  public updateUserType(id, type) {
    this.userService.updateUserType(id, type).subscribe(data => {
      this.snackBar.open('User rights have been updated successfully!', null, {duration: 2000});
    }, error => {
      this.snackBar.open('Something went wrong..', null, {duration: 2000});
    });
  }
}
