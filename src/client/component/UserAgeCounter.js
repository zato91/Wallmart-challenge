import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    contain:{
        width: '50%',
        margin: '0 auto'
    },
    formControl:{
        padding: '10px',
      
    }
  });

export default function UserAgeCounter() {
    const [itemList, setItemList] = useState([]);
    const [countAge, SetCountAge] = useState([]);
    const [item, setItem] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/items`)
            .then(response => response.json())
            .then((data) => {
                setItemList(data);
        });
    }, []);

   
    
    const handleChange = (event) => {
        setItem(event.target.value);
        setIsLoading(true);
        fetch(`http://localhost:3000/users/age?item=${event.target.value}`)
        .then(response => response.json())
        .then((data) => {
            SetCountAge(data);
            setIsLoading(false);
        });
    };


    const classes = useStyles();
    return (
        <>
            <h1>Age Demographic of Users with item</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Item</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={item}
                    onChange={handleChange}
                >
                    {itemList && itemList.map(i => {return <MenuItem value={i} key={i}> {i}</MenuItem>})}
                </Select>
            </FormControl>
            {isLoading ? (
                <div className={classes.process}>
                    <LinearProgress />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Age</TableCell>
                                <TableCell align='right'>Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countAge && countAge.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component='th' scope='row'>
                                        {row.age}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.count}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}
