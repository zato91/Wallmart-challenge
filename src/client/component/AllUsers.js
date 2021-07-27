import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    process: {
        width: '80%',
        '& > * + *': {
            marginTop: theme.spacing(5),
        },
    },
}));

export default function AllUsers() {
    const [users, setUsers] =useState();
    const classes = useStyles();

  async function getHobbie(){
    const res = await axios.get('http://localhost:3000/hobbies')
    const userInfo = await res.data
    setHobbies(hobbies => userInfo)

}

  useEffect(() => {
      getHobbie();
     
    },[]);
  

  const handleChange = async (e) => {
    setIsLoading(false)
    setHobby(e.target.value);
    const res = await axios.get(`http://localhost:3000/users/age/${e.target.value}`) 
    const userInfo = await res.data
    setUsers(userInfo)
    setIsLoading(true)
  };


    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])
    

   
    return (
      <>  
        <h1>All Users</h1>
        <TableContainer component={Paper} className={classes.contain}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">User Age</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <TableRow key={user.username}>
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="right">{user.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    </>
    )
}
