import { takeLatest, all, call, put } from "typed-redux-saga";

import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
