import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import { Course } from 'src/app/services/courses/courses.service';
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

export const coursesFeatureKey = 'coursesReducer';

export interface CoursesState {
  allCourses: Course[] | null;
  course: Course | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string | null;
}

const initialState: CoursesState = {
  allCourses: null,
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: null,
};

export const coursesStateReducer = createReducer(
  initialState,
  on(requestAllCourses, (state) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = true;
    })
  ),
  on(requestAllCoursesSuccess, (state, { courses }) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = false;
      draft.allCourses = courses;
    })
  ),
  on(requestAllCoursesFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = false;
      draft.errorMessage = error.message
    })
  ),

  on(requestSingleCourse, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = true;
    })
  ),
  on(requestSingleCourseSuccess, (state, { course }) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
      draft.course = course;
    })
  ),
  on(requestSingleCourseFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
      draft.errorMessage = error.message
    })
  ),

  on(requestFilteredCourses, (state) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = true;
    })
  ),
  on(requestFilteredCoursesSuccess, (state, { courses }) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = false;
      draft.allCourses = courses;
    })
  ),
  on(requestFilteredCoursesFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isAllCoursesLoading = false;
      draft.errorMessage = error.message
    })
  ),

  on(requestDeleteCourse, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = true;
    })
  ),
  on(requestDeleteCourseSuccess, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
    })
  ),
  on(requestDeleteCourseFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
      draft.errorMessage = error.message
    })
  ),

  on(requestEditCourse, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = true;
    })
  ),
  on(requestEditCourseSuccess, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
    })
  ),
  on(requestEditCourseFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
      draft.errorMessage = error.message
    })
  ),

  on(requestCreateCourse, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = true;
    })
  ),
  on(requestCreateCourseSuccess, (state) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
    })
  ),
  on(requestCreateCourseFail, (state, { error }) =>
    produce(state, (draft) => {
      draft.isSingleCourseLoading = false;
      draft.errorMessage = error.message
    })
  ),
);

export const coursesReducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => coursesStateReducer(state, action);
