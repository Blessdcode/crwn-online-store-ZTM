import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const setCategoriesMap = (categoriesMap) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesMap = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSuccess(categoriesMap));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };