import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'students-details-students-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsListComponent {
  students$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private dashboardService: DashboardService
  ) {
    this.dashboardService.callGetStudentsRecords().subscribe((students) => {
      this.students$.next(students);
    });
  }
}
