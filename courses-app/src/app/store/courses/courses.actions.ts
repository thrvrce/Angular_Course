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

const requestAllCourses = createAction(CoursesActionTypes.requestAllCoursesStart)
const requestAllCoursesSuccess = createAction(CoursesActionTypes.requestAllCoursesSuccess, props<{ courses: Course[] }>())
const requestAllCoursesFail = createAction(CoursesActionTypes.requestAllCoursesFail, props<{ error: Error }>())
// Actions for request individual course
const requestSingleCourse= createAction(CoursesActionTypes.requestSingleCourseStart)
const requestSingleCourseSuccess= createAction(CoursesActionTypes.requestSingleCourseSuccess, props<{ course: Course }>())
const requestSingleCourseFail= createAction(CoursesActionTypes.requestSingleCourseFail, props<{ error: Error }>())
// Actions for request filtered Courses
const requestFilteredCourses= createAction(CoursesActionTypes.requestFilteredCoursesStart)
const requestFilteredCoursesSuccess= createAction(CoursesActionTypes.requestFilteredCoursesSuccess, props<{ courses: Course[] }>())
const requestFilteredCoursesFail= createAction(CoursesActionTypes.requestFilteredCoursesFail, props<{ error: Error }>())
// Actions for delete course
const requestDeleteCourse= createAction(CoursesActionTypes.requestDeleteCourseStart)
const requestDeleteCourseSuccess= createAction(CoursesActionTypes.requestDeleteCourseSuccess, props<{ finished: true }>())
const requestDeleteCourseFail= createAction(CoursesActionTypes.requestDeleteCourseFail, props<{ error: Error }>())
// Actions for edit course
const requestEditCourse= createAction(CoursesActionTypes.requestEditCourseStart)
const requestEditCourseSuccess= createAction(CoursesActionTypes.requestEditCourseSuccess, props<{ finished: true }>())
const requestEditCourseFail= createAction(CoursesActionTypes.requestEditCourseFail, props<{ error: Error }>())
// Actions for create course
const requestCreateCourse= createAction(CoursesActionTypes.requestCreateCourseStart)
const requestCreateCourseSuccess= createAction(CoursesActionTypes.requestCreateCourseSuccess, props<{ finished: true }>())
const requestCreateCourseFail= createAction(CoursesActionTypes.requestCreateCourseFail, props<{ error: Error }>())
