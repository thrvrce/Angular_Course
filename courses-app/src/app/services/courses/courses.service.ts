import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

export type Course = {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
};

type CoursesResponse<T> = { successful: boolean; result: T };

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private handleError(method: string) {
    return (error: HttpErrorResponse) => {
      throw new Error(`CoursesService.${method} error`, { cause: error });
    };
  }

  getAll() {
    return this.httpClient
      .get<CoursesResponse<Course[]>>('localhost:4000/courses/all')
      .pipe(
        map((response) => response.result),
        catchError(this.handleError('getAll'))
      );
  }

  createCourse(course: Omit<Course, 'id'>) {
    return this.httpClient
      .post<unknown>('localhost:4000/courses/add', course)
      .pipe(
        map(() => ({ finished: true })),
        catchError(this.handleError('createCourse'))
      );
  }

  editCourse(courseId: string, course: Omit<Course, 'id'>) {
    return this.httpClient
      .put<unknown>(`localhost:4000/courses/${courseId}`, course)
      .pipe(
        map(() => ({ finished: true })),
        catchError(this.handleError('editCourse'))
      );
  }

  getCourse(courseId: string) {
    return this.httpClient
      .get<CoursesResponse<Course>>(`localhost:4000/courses/${courseId}`)
      .pipe(
        map((response) => response.result),
        catchError(this.handleError('getCourse'))
      );
  }

  deleteCourse(courseId: string) {
    return this.httpClient
      .delete<unknown>(`localhost:4000/courses/${courseId}`)
      .pipe(
        map(() => ({ finished: true })),
        catchError(this.handleError('deleteCourse'))
      );
  }
}
