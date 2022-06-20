import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    currentPage: 1,
    sort: {
      name: 'популярности', sortProperty: 'rating'
    },
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {setCategoryId, setSort, setCurrentPage} = filterSlice.actions;

export default filterSlice.reducer;
