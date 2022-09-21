import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';


const Confirmation = ({ prevStep, nextStep, handleChange, values }) => {

  const { name, email, password, country, levelOfEducation } = values;
  
  const next = event => {
    event.preventDefault();
    nextStep();
  }
  const previous = event => {
    event.preventDefault();
    prevStep();
  }

  return (
    <MuiThemeProvider>

    <>
      <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem>
            <ListItemText primary="Full Name" secondary={name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="level Of Education" secondary={levelOfEducation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="country" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="password" secondary={password} />
          </ListItem>
        </List>
        <br />

        <Button
          color="secondary"
          variant="contained"
          onClick={previous}
        >Back</Button>

        <Button
          color="primary"
          variant="contained"
          onClick={next}
        >Confirm & Continue</Button>
      </Dialog>
    </>
  </MuiThemeProvider>
  )
}

export default Confirmation