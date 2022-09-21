import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserDetails = ({ nextStep, handleChange, values }) => {
    const conti = e => {
        e.preventDefault();
        nextStep();
      };
  return (
<MuiThemeProvider>
    <>
    <Dialog
      open
      fullWidth
      maxWidth='sm'
    >
      <AppBar title="Enter User Details" />
      <TextField
        placeholder="Enter Your Full Name"
        label="Full Name"
        onChange={handleChange('name')}
        defaultValue={values.name}
        margin="normal"
        fullWidth
        
      />
      <br />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange={handleChange('email')}
        defaultValue={values.email}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter A Strong Password"
        label="Password"
        onChange={handleChange('password')}
        defaultValue={values.password}
        margin="normal"
        fullWidth
        type="password"
      />
      <br />

      <Button
        color="primary"
        variant="contained"
        onClick={conti}
      >Continue</Button>
    </Dialog>
  </>
</MuiThemeProvider>
    
  )
}

export default UserDetails