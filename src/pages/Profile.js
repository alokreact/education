import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { updateProfile } from "../features/profileSlice";


const Profile = () => {

    const { user, isLoading } = useSelector((store) => store.user);

    const dispatch = useDispatch();

    console.log(user);

    const [userData, setUserData] = useState({
        name: user.data.user?.name || '',
        email: user.data.user?.email || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = userData;
        //dispatch()
        dispatch(updateProfile({ 'email': email, 'password': password }));
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]:value });
    }
    return (
        <Grid item xs={6} md={8}>
            <form onSubmit={(e) => handleSubmit} noValidate>
                <TextField
                    name='email'
                    label={"Email"} //optional
                    value={userData.email}
                    onChange={handleChange}

                />
                <span></span>
                <br />
                <TextField
                    name='name'
                    label={"Name"} //optional
                    value={userData.name}
                    onChange={handleChange}
                />
                <br />
                <Button variant="contained" type="submit">{isLoading ? 'Loading...' : 'Submit'}</Button>

            </form>
        </Grid>
    )
}
export default Profile;