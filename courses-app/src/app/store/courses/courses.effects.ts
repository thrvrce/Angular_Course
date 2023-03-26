import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';
import {
  requestAllCourses,
  requestAllCoursesSuccess,
  requestAllCoursesFail,
  requestSingleCourse,
  requestSingleCourseSuccess,
  requestSingleCourseFail,
  requestFilteredCourses,
  requestFilteredCoursesSuccess,
  requestFilteredCoursesFail,
  requestDeleteCourse,
  requestDeleteCourseSuccess,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseSuccess,
  requestEditCourseFail,
  requestCreateCourse,
  requestCreateCourseSuccess,
  requestCreateCourseFail,
} from './courses.actions';
import { CoursesStateFacade } from './courses.facade';
import { CoursesStoreService } from 'src/app/services/coursesStore/courses-store.service';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAllCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
          map((courses) => requestAllCoursesSuccess({ courses })),
          catchError((error: Error) => of(requestAllCoursesFail({ error })))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestFilteredCourses),
      mergeMap(({ searchConfig }) =>
        this.coursesStateFacade.allCourses$.pipe(
          map((courses) => {
            const filteredCourses = courses?.filter((course) => {
              if (
                searchConfig.authors &&
                !searchConfig.authors.some((author) =>
                  course.authors.includes(author)
                )
              ) {
                return false;
              }

              if (
                searchConfig.duration &&
                searchConfig.duration !== course.duration
              ) {
                return false;
              }

              if (searchConfig.title && searchConfig.title !== course.title) {
                return false;
              }

              return true;
            });

            return requestFilteredCoursesSuccess({
              courses: filteredCourses ?? [],
            });
          }),
          catchError((error: Error) =>
            of(requestFilteredCoursesFail({ error }))
          )
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestSingleCourse),
      mergeMap(({ courseId }) =>
        this.coursesService.getCourse(courseId).pipe(
          map((course) => requestSingleCourseSuccess({ course })),
          catchError((error: Error) => of(requestSingleCourseFail({ error })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteCourse),
      mergeMap(({ courseId }) =>
        this.coursesService.deleteCourse(courseId).pipe(
          map(({ finished }) => requestDeleteCourseSuccess({ finished })),
          catchError((error: Error) => of(requestDeleteCourseFail({ error })))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestEditCourse),
      mergeMap(({ courseId, course }) =>
        this.coursesService.editCourse(courseId, course).pipe(
          map(({ finished }) => requestEditCourseSuccess({ finished })),
          catchError((error: Error) => of(requestEditCourseFail({ error })))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCreateCourse),
      mergeMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map(({ finished }) => requestCreateCourseSuccess({ finished })),
          catchError((error: Error) => of(requestCreateCourseFail({ error })))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          requestCreateCourseSuccess,
          requestEditCourseSuccess,
          requestSingleCourseFail
        ),
        tap(() => {
          this.router.parseUrl('./courses');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private coursesStateFacade: CoursesStateFacade,
    private router: Router
  ) {}
}
