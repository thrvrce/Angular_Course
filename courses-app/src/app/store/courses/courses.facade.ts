import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { CoursesState } from './courses.reducer';
import { State } from '../store.type';
import {
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
  getCourses,
  getAllCourses,
  getCourse,
  getErrorMessage,
} from './courses.selectors';
import {
  requestAllCourses,
  requestSingleCourse,
  requestFilteredCourses,
  requestDeleteCourse,
  requestEditCourse,
  requestCreateCourse,
} from './courses.actions';
import { Course } from 'src/app/services/courses/courses.service';

@Injectable()
export class CoursesStateFacade {
  constructor(private store: Store<State>) {}

  isAllCoursesLoading$ = this.store.pipe(map(isAllCoursesLoadingSelector));
  isSingleCourseLoading$ = this.store.pipe(map(isSingleCourseLoadingSelector));
  isSearchingState$ = this.store.pipe(map(isSearchingStateSelector));
  courses$ = this.store.pipe(map(getCourses));
  allCourses$ = this.store.pipe(map(getAllCourses));
  course$ = this.store.pipe(map(getCourse));
  errorMessage$ = this.store.pipe(map(getErrorMessage));

  getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(courseId: string) {
    this.store.dispatch(requestSingleCourse({ courseId }));
  }

  getFilteredCourses(searchConfig: Partial<Pick<Course, 'title' | 'duration' | 'authors'>>) {
    this.store.dispatch(requestFilteredCourses({searchConfig}));
  }

  editCourse(courseId: string, course: Omit<Course, 'id'>) {
    this.store.dispatch(requestEditCourse({ courseId, course }));
  }

  createCourse(course: Omit<Course, 'id'>) {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(requestDeleteCourse({ courseId }));
  }
}
