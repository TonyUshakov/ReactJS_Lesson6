import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from './tasks';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksData);
    }, 3000); // Имитация задержки загрузки данных
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
  },
  reducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
      state.status = 'succeeded';
    },
  
  },
});

export default tasksSlice.reducer;