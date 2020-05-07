import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Paper, Grid } from '@material-ui/core';

import useStyles from './style';
const Summary = ({ quote }) => {
    const { total, data } = quote;
    const { brand, year, plan } = data;
    const classes = useStyles();

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    return (
        <Grid container justify="center" alignItems="center">
            <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom className={classes.typo}><strong>Quotation summary</strong></Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}><strong>Brand:</strong> {brand}</Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}><strong>Year:</strong> {year}</Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}><strong>Plan:</strong> {capitalize(plan)}</Typography>
            </Paper>
            <Paper className={classes.paperBlue}>
                <Typography variant="h4" gutterBottom><strong>${total}</strong></Typography>
            </Paper>
        </Grid>
    );
}

Summary.protoTypes = {
    quote: PropTypes.object.isRequired,
};
export default Summary;
