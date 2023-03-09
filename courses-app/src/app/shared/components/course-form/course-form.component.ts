import { Component } from '@angular/core';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { withLeadZero } from '../../utils/string.utils';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  faRemove = faRemove;

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.courseForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: this.fb.group({
        authorInput: ['', Validators.pattern('[a-zA-Z0-9]')],
      }),
      authors: this.fb.array([]),
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get title() {
    return this.courseForm.get('title');
  }
  get description() {
    return this.courseForm.get('description');
  }
  get author() {
    return this.courseForm.get('author') as FormGroup;
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray<FormGroup>;
  }

  get duration() {
    return this.courseForm.get('duration')
  }

  get durationValue(): number {
    return this.duration?.value ?? 0;
  }

  addAuthor() {
    const author = this.fb.group({
      authorName: [this.courseForm.get('author')?.value.authorInput ?? ''],
    });
    this.authors.push(author);
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  log(i?: any) {
    console.log('log', i);
  }

  getCourseDurationText() {
    const minutes = this.durationValue % 60;
    const hours = (this.durationValue - minutes) / 60;
    const courseDurationText = `${withLeadZero(String(hours))}:${withLeadZero(
      String(minutes)
    )}`;

    return courseDurationText;
  }
}
