import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses: {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
  }[] = [];
  @Input() isCoursesEditable: {id: string; isEditable: boolean}[] = [];
  @Output() showCardEvent = new EventEmitter();
  @Output() deleteCardEvent = new EventEmitter();
  @Output() editCardEvent = new EventEmitter();

  get coursesData () {
    return this.courses.map(course => {
      const isEditable = !!this.isCoursesEditable.find(courseEditableData => courseEditableData.id === course.id)?.isEditable

      return {...course, isEditable}
    })
  }
  showCard (cardId: string) {
    this.showCardEvent.emit('show ' + cardId)
  }
  deleteCard (cardId: string) {
    this.deleteCardEvent.emit('delete ' + cardId)
  }
  editCard (cardId: string) {
    this.editCardEvent.emit('edit ' + cardId)
  }
}
