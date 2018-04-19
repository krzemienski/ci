import {Component, Input, OnInit} from '@angular/core';
import {BuildStatus} from '../../constants';


@Component({
  selector: 'fci-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss']
})
export class StatusIconComponent implements OnInit {
  @Input() status: BuildStatus;

  readonly BuildStatus = BuildStatus;

  constructor() {}
  ngOnInit() {}

  isFailedState(): boolean {
    return this.status === BuildStatus.FAILED ||
        this.status === BuildStatus.MISSING_FASTFILE ||
        this.status === BuildStatus.INTERNAL_ISSUE;
  }
}
