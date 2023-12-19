import { Component, OnInit, WritableSignal, computed, signal, Signal } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

import { ModalDismissReasons, NgbModal, NgbDateStruct, NgbCalendar, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { ColDef, GridApi } from "ag-grid-community";
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'students-details-student-records',
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent implements OnInit {
	gridApi: any;
	apiResponse: any = [
		{
		  "name": "Pamela Feeney",
		  "country": "Paraguay",
		  "state": "NH",
		  "passportDeclaration": "false",
		  "fitnessDeclaration": "false",
		  "courseName": "BSc",
		  "subjects": "Maths",
		  "date":"Fri Oct 11 0030 10:00:10 GMT+0553 (India Standard Time)",
		  "city": "Fort Mustafastead",
		  "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg",
		  "street": "64282 Hauck Drives",
		  "address2": "Apt. 280",
		  "zip": "84106-6709",
		  "phone": "389-600-8245 x581",
		  "email": "Donald.Carter@gmail.com",
		  "website": "http://immaterial-eyestrain.biz"
		},
		{
		  "name": "Ms. Jasmine Klein",
		  "country": "Falkland Islands (Malvinas)",
		  "state": "KS",
		  "passportDeclaration": "true",
		  "fitnessDeclaration": "true",
		  "courseName": "BSc",
		  "subjects": "Maths",
		  "date":"Wed Jul 21 0038 03:44:39 GMT+0553 (India Standard Time)",
		  "city": "Destineystead",
		  "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/77.jpg",
		  "street": "205 Linwood Keys",
		  "address2": "Suite 772",
		  "zip": "39920-7589",
		  "phone": "857.755.4762 x4394",
		  "email": "Gwendolyn93@gmail.com",
		  "website": "http://haunting-volume.info"
		},
		{
		  "name": "Constance Durgan DDS",
		  "country": "Republic of Korea",
		  "state": "SC",
		  "passportDeclaration": "false",
		  "fitnessDeclaration": "false",
		  "courseName": "BSc",
		  "subjects": "Maths",
		  "date":"Wed Dec 03 0053 07:32:11 GMT+0553 (India Standard Time)",
		  "city": "Lake Sofia",
		  "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg",
		  "street": "95752 Lindgren Corners",
		  "address2": "Apt. 429",
		  "zip": "12255-8472",
		  "phone": "1-753-886-7212 x2333",
		  "email": "Dena67@yahoo.com",
		  "website": "http://petty-nursing.org"
		},
		{
		  "name": "Nichole Stiedemann III",
		  "country": "Andorra",
		  "state": "TN",
		  "passportDeclaration": "false",
		  "fitnessDeclaration": "false",
		  "courseName": "BSc",
		  "subjects": "Maths",
		  "date":"Mon Jun 23 0064 10:33:11 GMT+0553 (India Standard Time)",
		  "city": "Thornton",
		  "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg",
		  "street": "6749 Stuart Parkways",
		  "address2": "Suite 349",
		  "zip": "57530",
		  "phone": "1-705-881-5262 x7961",
		  "email": "Alta_McCullough@yahoo.com",
		  "website": "https://grimy-exposure.name"
		}
	];
	studentDetailsForm: FormGroup;
	model!: NgbDateStruct;
	today = this.calendar.getToday();
	closeResult: any;
	selectedRecord: any;
	// Writable
	studentsRecordsCount: WritableSignal<number> = signal(0);

	// Computed
	studentsWarning: Signal<string> = computed(()=>{
		if (this.studentsRecordsCount() < 26) {
			return 'Students count is too low';
		} else {
			return 'Students count is sufficient';
		}
	});

	columnDefs: ColDef[] = [
		{ field: "name"},
		{ field: "country"},
		{ field: "state"},
		{ field: "passportDeclaration"},
		{ field: "fitnessDeclaration"},
		{ field: "courseName"},
		{ field: "subjects"},
		{ field: "city"},
		{ field: "street"},
		{ field: "address2"},
		{ field: "city"},
		{ field: "state"},
		{ field: "country"},
		{ field: "phone"},
		{ field: "email"},
	];

	get nameControl(): FormControl {
		return this.studentDetailsForm.get("name") as FormControl;
	}
	get countryControl(): FormControl {
		return this.studentDetailsForm.get("country") as FormControl;
	}
	get stateControl(): FormControl {
		return this.studentDetailsForm.get("state") as FormControl;
	}
	get passportDeclarationControl(): FormControl {
		return this.studentDetailsForm.get("passportDeclaration") as FormControl;
	}
	get fitnessDeclarationControl(): FormControl {
		return this.studentDetailsForm.get("fitnessDeclaration") as FormControl;
	}
	get courseNameControl(): FormControl {
		return this.studentDetailsForm.get("courseName") as FormControl;
	}
	get subjectsControl(): FormControl {
		return this.studentDetailsForm.get("subjects") as FormControl;
	}
	get dateControl(): FormControl {
		return this.studentDetailsForm.get("date") as FormControl;
	}
	get cityControl(): FormControl {
		return this.studentDetailsForm.get("city") as FormControl;
	}
	get streetControl(): FormControl {
		return this.studentDetailsForm.get("street") as FormControl;
	}
	get address2Control(): FormControl {
		return this.studentDetailsForm.get("address2") as FormControl;
	}
	get emailControl(): FormControl {
		return this.studentDetailsForm.get("email") as FormControl;
	}
	get zipControl(): FormControl {
		return this.studentDetailsForm.get("zip") as FormControl;
	}

	constructor( 
		private fb: FormBuilder,
		private modalService: NgbModal,
		private calendar: NgbCalendar,
		private dashboardService: DashboardService
	) {
		this.studentDetailsForm = this.fb.group({
			name: this.fb.control("", [ Validators.required ]),
			country: this.fb.control("", [ Validators.required ]),
			state: this.fb.control("", [ Validators.required ]),
			passportDeclaration: this.fb.control("", [ Validators.required ]),
			fitnessDeclaration: this.fb.control("", [ Validators.required ]),
			courseName: this.fb.control("", [ Validators.required ]),
			subjects: this.fb.control("", [ Validators.required ]),
			date: this.fb.control("", [ Validators.required ]),
			city: this.fb.control("", [ Validators.required ]),
			street: this.fb.control("", [ Validators.required ]),
			address2: this.fb.control("", [ Validators.required ]),
			email: this.fb.control("", [ Validators.required ]),
			zip: this.fb.control("", [ Validators.required ])
		});

	}

	ngOnInit(): void {
		this.dashboardService.callGetStudentsDetailsRecords().subscribe(
			(res: any) => {
				console.log("Api response in students record component", res);
				this.apiResponse = res;
				this.studentsRecordsCount.set(this.apiResponse.length);
			}
		);
	}

	open(content: any) {
		this.studentDetailsForm.reset();
		this.modalService.open(content).result.then(
			(result) => {
				// Closing
				const newRecord = this.studentDetailsForm.value;
				this.apiResponse.push({...newRecord});
				this.apiResponse = JSON.parse(JSON.stringify(this.apiResponse));
				this.studentsRecordsCount.set(this.apiResponse.length);
			},
			(reason) => {
				// Dismiss
			}
		);
	}

	onGrindReady(params: any) {
		this.gridApi = params?.api;
	}

	onOpenViewForm(studentsForm: any) {
		const selectedRow = this.gridApi?.getSelectedRows()[0];
		this.studentDetailsForm.patchValue(selectedRow);
		this.studentDetailsForm.disable();
		this.modalService.open(studentsForm).result.then(
			(result) => {
				this.studentDetailsForm.enable();
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason({reason})}`;
				this.studentDetailsForm.enable();
			}
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'Reason was escape press';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'Backdrop was clicked';
		} else {
			return `with: ${reason}`;
		}
	}

	onDeletedRecord(deleteTemplate: any) {
		const selectedRecord = this.gridApi.getSelectedRows()[0];
		this.selectedRecord = selectedRecord;
		let newResponse: any = [];
		this.modalService.open(deleteTemplate).result.then(
			(result) => {
				this.closeResult = `Closed with: ${this.getDismissReason({result})}`;

				this.apiResponse.forEach(
					(rec: any) => {
						if (rec.name !== selectedRecord.name) {
							newResponse.push(rec);
						}	
					}
				);

				this.apiResponse = [...newResponse];
				this.studentsRecordsCount.set(this.apiResponse.length);
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason({reason})}`;
			}
		);
	}

	clearSelection(): void {
		this.gridApi.deselectAll();
	}

	checkIfSelected(): boolean {
		return this.gridApi?.getSelectedRows()?.length>0;
	}
}
