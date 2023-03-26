import { Action, ActionReducerMap } from "@ngrx/store";
import { CoursesState, coursesReducer, coursesStateReducer } from "./courses/courses.reducer";
import { State } from "./store.type";

export const reducers: ActionReducerMap<State> = {
  coursesReducer,
}
export const effects = []
