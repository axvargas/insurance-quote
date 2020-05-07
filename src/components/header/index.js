import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Paper } from '@material-ui/core';
import useStyles from './style';

const Header = ({ title }) => {
    const classes = useStyles();
    return (
        <Grid container justify="center" >
            <Paper className={classes.paper}>
                <Typography variant="h2" gutterBottom className={classes.typo}><strong>{title}</strong></Typography>
            </Paper>

        </Grid>

    );
};


Header.protoTypes = {
    title: PropTypes.string.isRequired,
    
};

export default Header;
