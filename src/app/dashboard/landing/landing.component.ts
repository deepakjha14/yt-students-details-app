import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
	selector: 'students-details-landing',
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
	filter: FormControl;
	students!: Array<any>;
	
	constructor(
		private fb: FormBuilder,
		private dashboardServic: DashboardService
	) {
        this.filter = this.fb.control("", { nonNullable: true });
	}

	ngOnInit(): void {
		this.dashboardServic.callGetStudentsRecords().subscribe(
			(res: any) => {
				this.students = res;
			}
		);
	}
}
