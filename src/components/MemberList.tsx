import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Button
} from '@material-ui/core';

import {
  MicOff,
  VideocamOff
} from '@material-ui/icons'

const useStyles = makeStyles(({ spacing }) => ({
  ListItem: {
    borderRadius: 5
  },
  BottomOptions: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  container: {
    position: "relative",
    height: "100%"
  }
}));

const MemberList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">Teilnehmer</Typography>
      <List>
        <ListItem button className={classes.ListItem}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText>Michael</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <MicOff />
            </IconButton>
            <IconButton edge="end">
              <VideocamOff />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem button className={classes.ListItem}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText>Michael</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <MicOff />
            </IconButton>
            <IconButton edge="end">
              <VideocamOff />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <div className={classes.BottomOptions}>
        <Button fullWidth variant="contained" color="primary">Einladen</Button>
      </div>
    </div>

  );
}

export default MemberList;