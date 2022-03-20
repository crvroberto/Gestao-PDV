
import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Box,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Link
  } from '@mui/material';

  import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
  
  export interface ef {
    target: object;
    name: string;
    value: number;
  }

  const Login = () => {
    //const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

//  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e : any) => {   
   setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlSubmit = (e : any) => {
   
  e.preventDefault();
 //   handleLogin(user);
  };

  return(

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={"classes.paper"}>
        <Avatar className={"classes.avatar"}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          
        </Typography>
        <form className={"classes.form"} noValidate onSubmit={handlSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={("Email")}
            name="email"
            value={user.email}
            onChange={handleChangeInput}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={("Senha")}
            id="password"
            value={user.password}
            onChange={(handleChangeInput)}
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={"classes.submit"}
          >
            {("Entrar")}
          </Button>
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
      
  )
  }
  export default Login