import { Component, Input } from '@angular/core';
import { withLeadZero } from '../../utils/string.utils';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() courseInfo: {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
    isEditable: boolean
  } = {id: '', title: '', description: '', creationDate: 'new Date()', duration: 0,  authors: [], isEditable: false}
  @Input() isCourseEditable = false;

  getAuthorsText () {
    return this.courseInfo.authors.join(', ')
  }
}
