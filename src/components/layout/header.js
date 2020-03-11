import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: 64,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  height: {
    minHeight: 64,
  }

}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.height} position="static">
        <Toolbar className={classes.height} variant="dense">
          <Typography variant="h6" color="inherit">
            Custom Vision
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
