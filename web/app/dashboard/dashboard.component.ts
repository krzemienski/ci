import {Component, OnInit} from '@angular/core';

import {ProjectSummary, ProjectSummaryResponse} from '../models/project_summary';
import {DataService} from '../services/data.service';

@Component({
  selector: 'fci-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  readonly DISPLAYED_COLUMNS: string[] = ['name', 'latestBuild', 'lane'];
  isLoading = true;
  projects: ProjectSummary[];
  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProjects().subscribe((projects) => {
      this.projects = [
        new ProjectSummary({
          id: '1',
          name: 'the coolest project',
          latest_status: 'success',
          lane: 'ios test',
          latest_timestamp: '2018-04-04 16:11:58 -0700'
        }),
        new ProjectSummary({
          id: '2',
          name: 'this project is okay',
          latest_status: 'success',
          lane: 'ios release',
          latest_timestamp: '2018-04-04 16:11:58 -0700'
        }),
        new ProjectSummary({
          id: '2',
          name: 'this project is okay',
          latest_status: 'pending',
          lane: 'ios release',
          latest_timestamp: '2018-04-04 16:11:58 -0700'
        }),
        new ProjectSummary({
          id: '2',
          name: 'this project is okay',
          latest_status: 'failure',
          lane: 'ios release',
          latest_timestamp: '2018-04-04 16:11:58 -0700'
        }),
        new ProjectSummary({
          id: '3',
          name: 'this project needs some work',
          latest_status: 'failure',
          lane: 'ios test',
          latest_timestamp: '2018-04-04 16:11:58 -0700'
        }),
        new ProjectSummary({
          id: '4',
          name: 'this project needs some work',
          latest_status: undefined,
          lane: 'ios test',
          latest_timestamp: undefined
        }),
      ];
      this.isLoading = false;
    });
  }
}
