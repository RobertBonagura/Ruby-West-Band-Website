import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function addShow(date, venue, location, time, info ) {
  return { date, venue, location, time, info };
}

const rows = [
  addShow('05/16/24', 'Circa', 'High Bridge NJ', '7:00pm', ''),
  addShow('05/29/24', 'Readington Brewery', 'Readington NJ', '7:00pm', ''),
  addShow('06/16/24', 'Ironbound', 'Asbury NJ', '7:00pm', ''),
  addShow('06/27/24', 'Buttzvelle Brewery', 'Washington NJ', '7:00pm', ''),
  addShow('07/2/24', 'Jam at The Dam', 'High Bridge NJ', '7:00pm', '')
];

function BasicTable() {
  return (
    <Box style={{marginBottom: "20px"}}>
      <Card>
        <Table aria-label="simple table" table-layout="fixed" white-space="nowrap">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.venue}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

    </Box>
  );
}

const Events = ({className}) => (
  <section id="events" className={className}>
    <Box>
      <h1>Upcoming Shows</h1>
      <div className='center-container container-item'>
        <BasicTable></BasicTable>
        <p>For booking click <a href="#contact" onClick={() => scrollToSection('contact')}>here</a>!</p>
      </div>
    </Box>

  </section>
);

export default Events;