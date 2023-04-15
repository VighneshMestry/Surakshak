import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Date, BP, HeartBeat, Diabetes) {
  return { Date, BP, HeartBeat, Diabetes};
}

const rows = [
  createData('15/4/23', 159, 6.0, 24,),
  createData('15/4/23', 237, 9.0, 37),
  createData('15/4/23', 262, 16.0, 24),
  createData('15/4/23', 305, 3.7, 67),
  createData('15/4/23', 356, 16.0, 49),
];

export default function PatientTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">BP</TableCell>
            <TableCell align="right">Heart Beat</TableCell>
            <TableCell align="right">Diabetes</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.BP}</TableCell>
              <TableCell align="right">{row.HeartBeat}</TableCell>
              <TableCell align="right">{row.Diabetes}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}