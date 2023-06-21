import React, { useState } from 'react';
import { Input, FormHelperText, InputLabel, FormGroup, FormControl, styled, Button, Paper, Typography, Stack, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/cart/userSlice';
import { Box, margin } from '@mui/system';
import {  useSelector } from 'react-redux';


import login from '../login.jpg'
import './login.css'

const Container = styled(FormGroup)`
  width:50%;
  margin:10px auto;
  & >div{
    margin-top:10px
  }
`

const paperStyle = styled(Paper)`
height:70vh;
width:280px;
margin :5px auto;
`

const Login = () => {

  const initialState = {
    'email': '',
    'password': '',

  }
  const [values, setValues] = useState(initialState);

  const { user, errors, isLoading } = useSelector(store => store.user);

  console.log('errors',errors);

  const dispatch = useDispatch();
  
  const onLogin = (e) => {
    //e.preventDefault();
    const { email, password } = values;
    if (email === ' ' || password === ' ') {
      alert('Please fill all the fields');
    }
    else {
       dispatch(loginUser({ 'email': email, 'password': password }));
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value })
  }

  const paperStyle = { height: '7ovh', margin: '5px auto', width: '550px', paddding: '10px' }

  return (
    <>
      <Stack space={2} direction="row" justifyContent='space-between' style={{ margin: '30px' }}>
        <Box flex={8}>
          <img src={login} alt='login' />
        </Box>

        <Box flex={4}>
          <Paper elevation={10} style={paperStyle}>
            <Typography variant='h3' style={{ textAlign: 'center' }}>LogIn</Typography>
            <Container style={{
              margin: '0px auto', display: 'tableCell',
              verticalAlign: 'middle'
            }}>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" name='email' onChange={handleChange} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

                {errors.email && (
            <span>{errors.email[0]}</span>
          )}
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>

                <Input id="my-input1" aria-describedby="my-helper-password" type='password'
                  name='password' onChange={handleChange} />

                <FormHelperText id="my-helper-text">Password.</FormHelperText>
                {errors.password && (
            <span>{errors.password[0]}</span>
          )}
              </FormControl>

              <FormControl>
                <Button variant='contained' onClick={(e) => onLogin()}>
                  {isLoading?'Loading...':'LogIn'}</Button>
              </FormControl>
            </Container>
          </Paper>
        </Box>

        {/* {errors && (
        <ul>
          {Object.values(errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )} */}
        {/* {errorMessage && <p>{errorMessage}</p>} Display the error message */}
      </Stack>
    </>
  )
}
export default Login;