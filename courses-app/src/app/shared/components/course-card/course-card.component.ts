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

  getCourseDurationText () {
    const minutes = this.courseInfo.duration % 60
    const hours = (this.courseInfo.duration - minutes) / 60
    const courseDurationText = `${withLeadZero(String(hours))}:${withLeadZero(String(minutes))}`

    return courseDurationText
  }

  getCourseCreationDateText () {
    const creationDateAsDate = new Date(this.courseInfo.creationDate)
    const day = creationDateAsDate.getDate()
    const month = creationDateAsDate.getMonth() + 1
    const year = creationDateAsDate.getFullYear()

    return `${withLeadZero(String(day))}.${withLeadZero(String(month))}.${year}`
  }

  getAuthorsText () {
    return this.courseInfo.authors.join(', ')
  }
}
