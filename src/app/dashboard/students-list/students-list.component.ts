import { Component } from '@angular/core';
import { DashboardService } from "../dashboard.service";
@Component({
  selector: 'students-details-students-list',
  standalone: true,
  imports: [],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {
  students: any;
  
  constructor(
    private studentsService: DashboardService
  ) {
    this.studentsService.callGetStudentsRecords().subscribe((students) => {
      this.students = students;
    });
  } 
}
