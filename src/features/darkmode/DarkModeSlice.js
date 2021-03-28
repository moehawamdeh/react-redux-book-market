import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = 'theme';
const defaultTheme = localStorage.getItem(localStorageKey) || 'light';

export const DarkModeSlice = createSlice({
  name: 'theme',
  initialState: {
    selectedTheme: defaultTheme,
    darkModeEnabled: defaultTheme !== 'light'
  },
  reducers: {
    toggle: state => {
      state.selectedTheme = (state.selectedTheme === 'light' ? 'dark' : 'light');
      state.darkModeEnabled = !state.darkModeEnabled;
      localStorage.setItem(localStorageKey, state.selectedTheme);
    }
  }
});

export const { toggle: toggleDarkMode } = DarkModeSlice.actions;
export const selectedTheme = state => state.theme.selectedTheme;
export const darkModeOn = state => state.theme.darkModeEnabled;

export default DarkModeSlice.reducer;
