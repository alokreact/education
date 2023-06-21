import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCourse, handleChange } from "../../features/courseSlice";
const initialState ={

    name:'',
    image:'',
    price:'',
    course_category:''
}

const Create = () => {


    const dispatch = useDispatch();

     const {  message,errors ,isLoading} = useSelector((store) => store.allCourses)

     console.log('message',message)
     console.log('message',isLoading)

     const [values, setValues ] = useState(initialState);

   // console.log('course_category', course_category);

    const handleInput = (e) => {
        //console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name)
        //console.log(value)
          //  const image = e.target.files[0];
           // dispatch(handleChange({ name, value, image}));
        if (e.target.name === 'image') {
         
            setValues ({...values,image:e.target.files[0]});
        }
        else{
            setValues({...values, [name]:value})
        }
    }
    const handleSubmit = () => {
        const { name , course_category, price, image } = values;
        if (name === '' || price === '' || course_category === '') {
            alert('Please all fields');
        }
        else {
            dispatch(createCourse({values }));
        }
    }
    return (
        <>
            <Paper>
                <h2>Form Demo</h2>

                <TextField
                    label={"Text Value"} //optional
                    name='name'
                    onChange={handleInput}
                />

                <TextField
                    label={"Text Value"} //optional
                    name='price'
                    onChange={handleInput}
                />

                <TextField
                    label={"Text Value"} //optional
                    name='course_category'
                    onChange={handleInput}
                />

<TextField
  name="image"
  type="file"
  onChange={handleInput}
/>

                <Button onClick={handleSubmit}>{isLoading?'Saving...':'Submit'}</Button>

                   {message? message:''}
                {/* <Button onClick={handleReset}>Reset</Button> */}
            </Paper>
        </>
    )
}
export default Create;