import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'students-details-subjects-details',
	standalone: true,
	imports: [ CommonModule ],
	templateUrl: './subjects-details.component.html',
	styleUrl: './subjects-details.component.scss'
})
export class SubjectsDetailsComponent {
	@Input() records!: any;
	@Input() size: number = 26;
	@Output() sizeChange = new EventEmitter<number>();

	onIncrease(): void {
		this.resize(+1);
	}

	onReduce(): void {
		this.resize(-1);
	}

	resize(delta: number): void {
		this.size = Math.min(40, Math.max(8, +this.size + delta));
		this.sizeChange.emit(this.size);
	}
}
