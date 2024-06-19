import { Component } from '@angular/core';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'students-details-list-placeholder',
  standalone: true,
  imports: [ StudentsListComponent ],
  templateUrl: './list-placeholder.component.html',
  styleUrl: './list-placeholder.component.scss'
})
export class ListPlaceholderComponent {

}
