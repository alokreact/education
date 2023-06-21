import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { registerUser } from '../features/cart/userSlice';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const initialState = {
  'email': '',
  'name': '',
  'password': '',
  'password_confirmation': '',
  'isMember': false

}

function Register() {

  const [values, setValues] = useState(initialState);

  const { user, errors, isLoading } = useSelector(store => store.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('>>>', values)
    const { email, password, password_confirmation, name } = values;
    dispatch(registerUser({ 'email': email, 'password': password, 'password_confirmation': password_confirmation, 'name': name }))
  }
  return (

    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>

        <Grid item xs={6} md={4}>
          xs=6 md=4
        </Grid>

        <Grid item xs={6} md={8}>
          <form onSubmit={onSubmit} noValidate>
            <TextField
              name='email'
              onChange={handleChange}
              label={"Email"} //optional
            />
            <span></span>
            <br />
            <TextField
              name='name'
              onChange={handleChange}
              label={"Name"} //optional
            />
            <br />

            <br />
            <TextField
              name='password'
              onChange={handleChange}
              label={"Password"} //optional
            />
            <br />

            <br />
            <TextField
              name='password_confirmation'
              onChange={handleChange}
              label={"Confirm Password"} //optional
            />

            <br />
            <br />
            <Button variant="contained" type="submit">{isLoading ? 'Loading...' : 'Submit'}</Button>

          </form>

          {
            errors ?
              <ul className='error'>
                {
                  [].concat(...Object.values(errors)).map(error => {
                    return (
                      <li key={error}>{error}</li>
                    )
                  })}
              </ul> : ''
          }
        </Grid>
      </Grid>
    </Box>

  )
}

export default Register;          