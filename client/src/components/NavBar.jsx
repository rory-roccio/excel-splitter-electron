import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Close from '@material-ui/icons/Close';
import Remove from '@material-ui/icons/Remove';
const { remote } = require('electron');
const window = remote.getCurrentWindow();

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 30,
    marginBottom: 5,
    backgroundColor: '#3f51b5',
    '-webkit-app-region': 'drag',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    margin: 'auto',
    marginLeft: 8
  },
  button: {
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#3949ab'
    }
  },
  minimize: {
    color: 'white',
    '-webkit-app-region': 'no-drag',
  },
  close: {
    color: 'white',
    '-webkit-app-region': 'no-drag',
    '&:hover': {
      color: 'red'
    }
  }
});

export default () => {
  const classes = useStyles();

  const handleClose = () => {
    window.close();
  };

  const handleMinimize = () => {
    window.minimize();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>XLSX Splitter</Typography>
      <ButtonGroup disableRipple={true} disableFocusRipple={true}>
        <IconButton className={classes.button} onClick={handleMinimize}>
          <Remove className={classes.minimize}/>
        </IconButton>
        <IconButton className={classes.button} onClick={handleClose}>
          <Close className={classes.close}/>
        </IconButton>
      </ButtonGroup>
    </div>
  );
};