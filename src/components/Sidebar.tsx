import React, { useState } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import MemberList from './MemberList';
import EnterRoomInput from './EnterRoomInput';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    padding: spacing(2),
    height: "100%"
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [isInRoom, setInRoom] = useState<Boolean>(true);
  return (
    <Paper className={classes.container}>
      {isInRoom ? (
        <MemberList></MemberList>
      ) : (
          <EnterRoomInput></EnterRoomInput>
        )
      }
    </Paper>
  )
}

export default Sidebar;