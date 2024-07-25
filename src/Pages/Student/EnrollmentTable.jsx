
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


import { CourseUnits } from '../../styles/DashboardStyles';


export const EnrollmentTable = () => {
  return (
    
        <>
            <Table>
                <tr>
                    <th> PROVIDER</th>
                    
                    <th> REG NO</th>
                    <th> STATUS</th>
                    <th> COURSE UNITS</th>
                </tr>
                <tr>
                    <th> <hr/></th>
                    <th> <hr/></th>
                    <th> <hr/></th>
                    <th> <hr/></th>
                </tr>
                <tr>
                  <td align='center'>
                    UBTEB
                  </td>
                  <td align='center'>
                    UBT416/2023/........
                  </td>
                  <td align='center'>
                    INACTIVE
                  </td>
                  <td align='center'>

                  <     CourseUnits>TDIT 125</CourseUnits>
                        <CourseUnits>TDIT 123</CourseUnits>
                        <CourseUnits>TDIT 120</CourseUnits>
                        <CourseUnits>TDIT 122</CourseUnits>
                        <CourseUnits>TDIT 127</CourseUnits>
               
                        

                  </td>
                </tr>
             
            

            
            
        
            </Table>


        </>


  )
}

export default EnrollmentTable;
