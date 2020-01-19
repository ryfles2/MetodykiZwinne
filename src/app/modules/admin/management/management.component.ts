import { Component, OnInit, ViewChild } from '@angular/core';
import { Locker } from 'src/app/shared/models/locker';
import { LockersService } from 'src/app/core/http/lockers.service';
import { MatSnackBar } from '@angular/material';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatisticsService } from 'src/app/core/http/statistics.service';
import { Statistic } from 'src/app/shared/models/statistic';

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
    {id: 1, name: 'Keys'},
    {id: 2, name: 'Errors'},
    {id: 3, name: 'Users'},
    {id: 4, name: 'Diagrams'}
  ];
  usersTabs = ['User', 'Keys', 'Errors', 'Users', 'Diagrams'];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] =  this.statisticsDay;//['Week I', 'Week II', 'Week III', 'Week IV'];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.statisticsUsed, label: 'Visits' }
  ];

  //

  @ViewChild('actionSelect', {static: false}) actionSelectRef;
  actionSelectValue: number;

  constructor(public lockerService: LockersService,
              public statisticsService: StatisticsService,
              public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getLockersData();
    this.getStatistics();

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


      this.barChartLabels =  this.statisticsDay;//['Week I', 'Week II', 'Week III', 'Week IV'];
      this.barChartData = [
        { data: this.statisticsUsed, label: 'Lockers actions' }
      ];
    },
    (error) => {
      console.log('Error while fetching statistics');
    });
  }
}
