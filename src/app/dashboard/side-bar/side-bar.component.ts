import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'students-details-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
	@Input() isExpanded: boolean = false;
	@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

	handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
