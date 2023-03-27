import { configureStore } from '@reduxjs/toolkit';
import  listSliceReducer  from './listSlice.reducer';





export const store = configureStore({
   reducer: {
      listSlice: listSliceReducer
}});