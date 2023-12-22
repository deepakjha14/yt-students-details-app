import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbHighlight, NgbDatepickerModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";

import { LandingComponent } from "./landing/landing.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { DashboardService } from './dashboard.service';
import { StudentsMarksComponent } from "./students-marks/students-marks.component";

const routes: Routes = [
	{
		path: "",
		component: DashboardComponent,
		children:[
			{
				path: "",
				redirectTo: "/dashboard/landing",
				pathMatch: "full"
			},
			{
				path: "landing",
				component: LandingComponent
			},
			{
				path: "students",
				component: StudentRecordsComponent
			},
			{
				path: "students-marks",
				component: StudentsMarksComponent
			}
		]
	},
];

@NgModule({
	declarations: [
		DashboardComponent,
		LandingComponent,
		SideBarComponent,
		StudentRecordsComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		NgbHighlight,
		NgbDatepickerModule,
		NgbTypeaheadModule,
		AgGridModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(
			routes
		)
	],
	providers: [
		DashboardService
	]
})
export class DashboardModule { }
