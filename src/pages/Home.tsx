import { useAuth0 } from "@auth0/auth0-react";
import { createStyles, Grid, IconButton, InputAdornment, makeStyles, Divider, TextField, Theme, Paper, Button, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Home() {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      direction: 'rtl',
    },
    title:{
      color: 'cornsilk',
      textAlign: 'center'
    },
    gridContainer:{
      backgroundColor: 'burlywood'
    },
    gridItem:{
      textAlign: 'center'
    },
    button:{
      backgroundColor: 'cornsilk',
      color:'burlywood'
    }
  }),
);

  const { loginWithRedirect } = useAuth0();
  const [allValues, setAllValues] = useState({
    email: '',
    password: '',
    showPassword: false,
 });

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllValues({...allValues, [event.target.name]: event.target.value})
 }

 const handleClickPasswordVisability = () => {
    setAllValues({...allValues, showPassword: !allValues.showPassword})
 }
 
 const classes = useStyles();

  return (
    <>
    <Grid container className={classes.root}>
    <Grid item xs={2} />
    <Grid  item xs={8} container spacing={3} className={classes.gridContainer}>
      <Grid item xs={12}>
        <h1 className={classes.title}> Sign in to Winner Shot!</h1>
        <Divider />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={8} className={classes.gridItem}>
        <TextField
            id="email"
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
      </Grid>
      <Grid item xs={2} />

      <Grid item xs={2} />
      <Grid item xs={8} className={classes.gridItem}>
        <TextField
            id="password"
            name="password"
            label="Password"
            type= {allValues.showPassword ? "text" : "password"}
            placeholder="Password"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" >
                  <IconButton onClick={handleClickPasswordVisability}>
                    {allValues.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  
                </InputAdornment>
              ),
            }}
          />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} className={classes.gridItem}>
        <Button variant="contained" 
          className={classes.button}
        // className={classes.margin}
        onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </Grid>
      <Grid item xs={2} />
    </Grid>  
    <Grid item xs={2} />
    </Grid>
    </>
  );
}
