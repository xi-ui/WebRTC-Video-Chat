import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  video: {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  }
}));

const VideoPlayer = () => {
  const classes = useStyles();
  return (
    <video autoPlay className={classes.video} />
  )
}

export default VideoPlayer;