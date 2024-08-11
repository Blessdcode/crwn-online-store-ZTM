import { createSelector } from "reselect";

import  {CategoryMap} from './category.types'
import {categoriesState} from './category.reducer'

import { RootState } from "../store";


const selectCategoryReducer = (state: RootState):categoriesState => state.categories;

 

export const selectCategoriesMap = (state:RootState) =>
  state.categories.categoriesMap.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);


export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
