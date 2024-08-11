import { AnyAction } from "redux-saga";

import {  Category } from "./category.types";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./category.action";

export type categoriesState = {
  readonly categoriesMap: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: categoriesState = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): categoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, isLoading: false, categoriesMap: action.payload };
  }

  if (fetchCategoriesFailure.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;

 
};
