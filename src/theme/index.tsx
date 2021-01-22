import { unstable_createMuiStrictModeTheme, ThemeOptions } from '@material-ui/core';

// Possible Theme Colors
// #2CDE6D - Kinda green
// #ffa000 - Orange

const rawDarkTheme: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#2CDE6D',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    },
  },
};

const DarkTheme = unstable_createMuiStrictModeTheme(rawDarkTheme);

export { DarkTheme, rawDarkTheme };