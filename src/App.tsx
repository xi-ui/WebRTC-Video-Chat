import React from 'react';
import { CssBaseline, Grid, Paper, makeStyles, ThemeProvider } from '@material-ui/core';
import { VideoPlayer, Sidebar } from './components';
import { DarkTheme } from './theme';

const useStyles = makeStyles(() => ({
  container: {
    height: "100%"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item xs={9}>
          <VideoPlayer></VideoPlayer>
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
