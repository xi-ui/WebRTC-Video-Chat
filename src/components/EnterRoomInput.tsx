import React from 'react';
import { makeStyles, TextField, Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  Grid: {
    marginTop: spacing(2)
  }
}));

const EnterRoomInput = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.Grid}>
      <Grid item xs={12}>
        <Typography variant="h5">Raum beitreten</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Room-ID" variant="outlined"></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary" >Beitreten</Button>
      </Grid>
    </Grid>
  )
}

export default EnterRoomInput;