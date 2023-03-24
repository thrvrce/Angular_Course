import { Injectable } from '@angular/core';

import { Course, CoursesService } from '../courses/courses.service';
import { BehaviorSubject } from 'rxjs';

import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading$$.asObservable();
  private courses$$ = new BehaviorSubject<Course[]>([]);
  public courses$ = this.courses$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  private startLoading() {
    this.isLoading$$.next(true);
  }

  private finishLoading() {
    this.isLoading$$.next(false);
  }

  findCourses(
    searchConfig: Partial<Pick<Course, 'title' | 'duration' | 'authors'>>
  ) {
    this.courses$
      .pipe(
        map((courses) => {
          return courses.filter((course) => {
            if ( searchConfig.authors && !searchConfig.authors.some((author) => course.authors.includes(author))) { return false; }

            if ( searchConfig.duration && searchConfig.duration !== course.duration) { return false; }

            if ( searchConfig.title && searchConfig.title !== course.title) { return false; }

            return true;
          });
        })
      )
      .subscribe(this.courses$$);
  }

  getAll() {
    this.startLoading();

    this.coursesService.getAll().pipe(
      tap((courses) => {
        this.courses$$.next(courses);
        this.finishLoading();
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>) {
    this.startLoading();

    this.coursesService.createCourse(course).pipe(
      tap(() => {
        this.finishLoading();
      })
    );
  }

  editCourse(courseId: string, course: Omit<Course, 'id'>) {
    this.startLoading();
    return this.coursesService.editCourse(courseId, course).pipe(
      tap(() => {
        this.finishLoading();
      })
    );
  }

  getCourse(courseId: string) {
    this.startLoading();
    return this.coursesService.getCourse(courseId).pipe(
      tap(() => {
        this.finishLoading();
      })
    );
  }

  deleteCourse(courseId: string) {
    this.startLoading();
    return this.coursesService.deleteCourse(courseId).pipe(
      tap(() => {
        this.finishLoading();
      })
    );
  }
}
