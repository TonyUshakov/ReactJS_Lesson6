import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import tasksSlice from './tasksSlice';
 
const store =  configureStore({
  reducer: {
    products: tasksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});


export default store