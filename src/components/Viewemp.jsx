import { Table,TableBody,TableCell,TableHead, TableRow, Typography, colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Style.css'
import axios from 'axios'
const Viewemp = () => {
    const [value,setvalue]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
           console.log(response.data.users);
           setvalue(response.data.users)
        })
    },[])
    return (
    <div>
     <Table className='Tabal'>
        <TableHead>
            <TableRow>
                <TableCell className='cell'>FirstName</TableCell>
                <TableCell className='cell'>LastName</TableCell>
                <TableCell className='cell'>Age</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
           {value.map((data,ind)=>
           {
            return (
            <TableRow key={ind} className='cell'>
                 <TableCell className='cell'>{data.firstName}</TableCell>
                 <TableCell className='cell'>{data.lastName}</TableCell>
                 <TableCell className='cell'>{data.age}</TableCell>


            </TableRow>
            )
           })}
        </TableBody>
     </Table>
      
    </div>
  )
}

export default Viewemp
