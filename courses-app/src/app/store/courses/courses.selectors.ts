import { createSelector } from "@ngrx/store";
import { State } from "../store.type";

const getCorsesReducer = (state: State) => state.coursesReducer

export const isAllCoursesLoadingSelector = (state: State) => getCorsesReducer(state).isAllCoursesLoading
export const isSingleCourseLoadingSelector = (state: State) => getCorsesReducer(state).isSingleCourseLoading
export const getCourses = (state: State) => getCorsesReducer(state).allCourses
export const getAllCourses = (state: State) => getCorsesReducer(state).allCourses
export const getCourse = (state: State) => getCorsesReducer(state).course
export const getErrorMessage = (state: State) => getCorsesReducer(state).errorMessage
