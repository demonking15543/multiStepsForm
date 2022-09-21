import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const next  = event =>{
    event.preventDefault();
    nextStep();
  }
  const previous  = event =>{
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
      <AppBar title="Enter Personal Details" />
      <TextField
        placeholder="Enter Your Country"
        label="Country"
        onChange={handleChange('country')}
        defaultValue={values.country}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your level Of Education"
        label="Education"
        onChange={handleChange('levelOfEducation')}
        defaultValue={values.levelOfEducation}
        margin="normal"
        fullWidth
      />
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
      >Continue</Button>
    </Dialog>
  </>
</MuiThemeProvider>
  )
}

export default PersonalDetails