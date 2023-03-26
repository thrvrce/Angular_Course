import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

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

  getFilteredCourses(config: {duration?: string[]; creationDate?: string[]; description?: string[]; title?: string[]}) {
    const {duration, creationDate, description, title} = config;

    if(
      (!duration || !duration.length) &&
      (!creationDate || !creationDate.length) &&
      (!description || !description.length ) &&
      (!title || !title.length)) {
      throw new Error('Empty search config')
    }

    const params = new HttpParams()

    if(duration?.length) {
      params.set('duration', duration.join(','))
    }

    if(creationDate?.length) {
      params.set('creationDate', creationDate.join(','))
    }

    if(description?.length) {
      params.set('description', description.join(','))
    }

    if(title?.length) {
      params.set('title', title.join(','))
    }


    return this.httpClient
      .get<CoursesResponse<Course[]>>('localhost:4000//courses/filter', { params })
      .pipe(
        map((response) => response.result),
        catchError(this.handleError('getAll'))
      );
  }
}
