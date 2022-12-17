import React, {useState} from 'react';
import {
    Stack, 
    // Typography,
    Button,
    TextField,
    Box,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Axios from "axios";

const Weather = () => {
  const [inp, setInp] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    if(inp === ""){
      return;
    }else{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=cac1df63174b02834fcf809d674b0def`;
      Axios.get(url)
      .then((resp)=>{
        console.log(resp.data);
      })
      .catch((err)=>{
        console.log(err.message);
      })
      .finally(()=>{
        console.log("Code Executed");
      })
    }
  }

  return (
    <Stack sx={4}>
        {/* <Typography align='center' variant='h2'>Weather App</Typography> */}

        <Box sx={{mt: 5}}>
        <form onSubmit={submitHandler} direction='row'>
          <TextField 
            label='Search...'
            color='success'
            size='small'
            value={inp}
            onChange={(e)=> setInp(e.target.value)}
          />
          <Button
            startIcon={<SearchIcon />}
            type='submit'
            variant='contained'
            color='success'
            size='large'
          ></Button>
        </form>
        </Box>
    </Stack>
  )
}

export default Weather