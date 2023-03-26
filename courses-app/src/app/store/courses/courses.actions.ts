import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/services/courses/courses.service';

enum CoursesActionTypes {
requestAllCoursesStart = 'requestAllCoursesStart',
requestAllCoursesSuccess = 'requestAllCoursesSuccess',
requestAllCoursesFail = 'requestAllCoursesFail',

requestSingleCourseStart = 'requestSingleCourseStart',
requestSingleCourseSuccess = 'requestSingleCourseSuccess',
requestSingleCourseFail = 'requestSingleCourseFail',

requestFilteredCoursesStart = 'requestFilteredCoursesStart',
requestFilteredCoursesSuccess = 'requestFilteredCoursesSuccess',
requestFilteredCoursesFail = 'requestFilteredCoursesFail',

requestDeleteCourseStart = 'requestDeleteCourseStart',
requestDeleteCourseSuccess = 'requestDeleteCourseSuccess',
requestDeleteCourseFail = 'requestDeleteCourseFail',

requestEditCourseStart = 'requestEditCourseStart',
requestEditCourseSuccess = 'requestEditCourseSuccess',
requestEditCourseFail = 'requestEditCourseFail',

requestCreateCourseStart = 'requestCreateCourseStart',
requestCreateCourseSuccess = 'requestCreateCourseSuccess',
requestCreateCourseFail = 'requestCreateCourseFail',
}

export const requestAllCourses = createAction(CoursesActionTypes.requestAllCoursesStart)
export const requestAllCoursesSuccess = createAction(CoursesActionTypes.requestAllCoursesSuccess, props<{ courses: Course[] }>())
export const requestAllCoursesFail = createAction(CoursesActionTypes.requestAllCoursesFail, props<{ error: Error }>())
// Actions for request individual course
export const requestSingleCourse= createAction(CoursesActionTypes.requestSingleCourseStart)
export const requestSingleCourseSuccess= createAction(CoursesActionTypes.requestSingleCourseSuccess, props<{ course: Course }>())
export const requestSingleCourseFail= createAction(CoursesActionTypes.requestSingleCourseFail, props<{ error: Error }>())
// Actions for request filtered Courses
export const requestFilteredCourses= createAction(CoursesActionTypes.requestFilteredCoursesStart)
export const requestFilteredCoursesSuccess= createAction(CoursesActionTypes.requestFilteredCoursesSuccess, props<{ courses: Course[] }>())
export const requestFilteredCoursesFail= createAction(CoursesActionTypes.requestFilteredCoursesFail, props<{ error: Error }>())
// Actions for delete course
export const requestDeleteCourse= createAction(CoursesActionTypes.requestDeleteCourseStart)
export const requestDeleteCourseSuccess= createAction(CoursesActionTypes.requestDeleteCourseSuccess, props<{ finished: true }>())
export const requestDeleteCourseFail= createAction(CoursesActionTypes.requestDeleteCourseFail, props<{ error: Error }>())
// Actions for edit course
export const requestEditCourse= createAction(CoursesActionTypes.requestEditCourseStart)
export const requestEditCourseSuccess= createAction(CoursesActionTypes.requestEditCourseSuccess, props<{ finished: true }>())
export const requestEditCourseFail= createAction(CoursesActionTypes.requestEditCourseFail, props<{ error: Error }>())
// Actions for create course
export const requestCreateCourse= createAction(CoursesActionTypes.requestCreateCourseStart)
export const requestCreateCourseSuccess= createAction(CoursesActionTypes.requestCreateCourseSuccess, props<{ finished: true }>())
export const requestCreateCourseFail= createAction(CoursesActionTypes.requestCreateCourseFail, props<{ error: Error }>())
