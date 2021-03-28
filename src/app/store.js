/* eslint-disable comma-dangle */
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/darkmode/DarkModeSlice';

export default configureStore({
  reducer: {
    // eslint-disable-next-line comma-dangle
    theme: themeReducer
  },
});
