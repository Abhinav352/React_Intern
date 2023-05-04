import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';



const Addemp = () => {

    const { register,
        handleSubmit,}=useForm();
    let getVal=(val)=>{
console.log(val);
alert('Form Submitted')
axios.post('https://reqres.in/api/asers',val).then((response)=>{
    alert(`The data is posted with id ${response.data.id}`)
})

    }
  return (
    <Stack
      component="form"
      sx={{
        
        width: '25ch',
        marginLeft:'600px',
        marginTop:'200px'
        
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        name='empname'
        {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        label='Employee Name'
        variant="filled"
        
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Employee Location"
        variant="filled"
       
        
      />
      <TextField
      name='empdesignation'
      {...register('empdesignation')}

        hiddenLabel
        id="filled-hidden-label-normal"
        label="Employee Designation"
        variant="filled"
      />
      <Button color='warning' variant='contained'onClick={handleSubmit(getVal)}>
        SUBMIT
      </Button>
    </Stack>
  )
}

export default Addemp
