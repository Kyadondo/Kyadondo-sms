import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { PiX } from 'react-icons/pi';




export const TableBelow = () => {
  return (
    

    <Table>
      <TableBody>
          <TableRow>
            <TableCell align='center' >PARENT'S NAME</TableCell>
            
            <TableCell align='center' >KIWEEWA GODFREY</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' > STUDENT'S TELL</TableCell>
            
            <TableCell  align='center'>0779172965</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' > DATE OF BIRTH</TableCell>
            
            <TableCell align='center' >25/07/2024</TableCell>
          </TableRow>
          <TableRow>
          <TableCell align='center'>AGE</TableCell>
        
            <TableCell align='center' >24</TableCell>

          </TableRow>

          <br/>
          <br/>
          <br/>



          <TableRow>
            <th align='center' >FEES </th>
            
            <th align='center' >AMOUNT</th>
          </TableRow>

          <br/>
          <br/>
          <br/>


          


          <TableRow>
            <TableCell align='center' >TUITION BALANCE</TableCell>
            
            <TableCell align='center' >59000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell  align='center'> UBTEB FEES</TableCell>
            
            <TableCell align='center' >...........</TableCell>
          </TableRow>
          <TableRow>
            <TableCell  align='center'>FUNCTIONAL FEES</TableCell>
            
            <TableCell align='center' >...........</TableCell>
          </TableRow>
          <TableRow>
            <TableCell  align='center'>MEDICAL FEES</TableCell>
            
            <TableCell align='center' >...........</TableCell>
          </TableRow>
          <TableRow>
            <TableCell  align='center'>PROJECT  FEES</TableCell>
            
            <TableCell align='center' >........... </TableCell>
          </TableRow>
      </TableBody>
    </Table>















  )
}

export default TableBelow;
