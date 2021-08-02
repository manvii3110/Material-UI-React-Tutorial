import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';
import {blue,pink} from '@material-ui/core/colors';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border:0,
    margin: 25,
    borderRadius: 10,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme= createTheme({
  typography:{
    h2:{
      fontSize: 18,
    }
  },
  palette:
  {
    primary:{
      main: blue[500],
    },
    secondary:{
      main: pink[400],
    }
  }
})
function ButtonStyled(){
  const classes= useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}
function CheckBoxExample(){
  const [checked,setChecked]=React.useState(true)
  return(
    <FormControlLabel
    control={<Checkbox
    checked={checked}
    icon={<SaveIcon/>}
    checkedIcon={<SaveIcon/>}
    color="primary"
    onChange={(e)=> setChecked(e.target.checked)}
    inputProps={{
      'aria-label': 'primary checkbox'
    }}
    />}
    label="Testing Checkbox"
    />
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
    <div className="App">
      <header className="App-header">
      <AppBar maxWidth="lg">
      <ToolBar>
      <IconButton>
      <MenuIcon/>
      </IconButton>
      <Typography variant="h6">
      MUI Themeing
      </Typography>
      <Button>Login</Button>
      </ToolBar>
      </AppBar>
      <Typography variant="h2" component="div" style={{marginTop: 50}}>Welcome to MUI</Typography>
      <Typography variant="subtitle1">Learn how to use Material UI</Typography>
      <ButtonStyled/>
      <Grid container spacing={3} justify="center" style={{margin:20}}>
  <Grid item xs={3} sm={3}>
    <Paper style={{height:75, width:'100%', }}/>
  </Grid>
<Grid item xs={3} sm={3}>
    <Paper style={{height:75, width:'100%', }}/>
  </Grid>
<Grid item xs={3} sm={3}>
    <Paper style={{height:75, width:'100%', }}/>
  </Grid>
</Grid>
      <TextField
      variant="outlined"
      color="secondary"
      type="email"
      label="The Date"
      placeholder="test@test.com"
      className="input"
      />
      <CheckBoxExample/>
      <ButtonGroup  variant="contained" >
      <Button 
      startIcon={<SaveIcon />}
      size ='large' 
      variant="contained" 
      color="secondary">
      Save
      </Button>
      <Button 
      startIcon={<DeleteIcon />}
      size ='large' 
      variant="contained" 
      color="primary">
      Discard
      </Button>
      </ButtonGroup>
      
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material UI
        </a>
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
