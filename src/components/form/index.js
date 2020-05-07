import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Paper,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    FormHelperText
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab'
import { brands, years } from './variables'

import { getDifferenceYear, getIncrementByBrand, getIncrementByPlan } from './helper';
import useStyles from './style';

const Form = ({ setQuote, setCharging }) => {
    const classes = useStyles();

    const [brand, setBrand] = useState(null);
    const [helperB, sethelperB] = useState('');
    const [errorB, seterrorB] = useState(false);
    const [year, setYear] = useState(null);
    const [errorY, seterrorY] = useState(false);
    const [helperY, sethelperY] = useState('');
    const [plan, setPlan] = useState('');
    const [errorP, seterrorP] = useState(false);
    const [helperP, sethelperP] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let numberOfErrors = 0;
        if (brand === null) {
            numberOfErrors += 1
            seterrorB(true);
            sethelperB("Select the brand");
        }
        if (year === null) {
            numberOfErrors += 1
            seterrorY(true);
            sethelperY("Select the year");
        }
        if (plan === '') {
            numberOfErrors += 1
            seterrorP(true);
            sethelperP("Select the plan");
        }
        console.log(numberOfErrors);

        if (numberOfErrors > 0) {
            console.log("PARAAAAAAAAAAA")
            return;
        }
        //BasePrice de 2000
        let total = 2000;

        //Ontener diferencia de anios
        const difference = getDifferenceYear(year);

        //por cada anio restar el 3%

        total -= ((difference * total) * 3) / 100;


        //Euro 30%
        //American 15%
        //Asian 5%
        let brandIncrement = getIncrementByBrand(brand);
        total *= brandIncrement;


        //Basic 20%
        //Complete 50%
        let planIncrement = getIncrementByPlan(plan);
        total *= planIncrement;

        //Total
        total = parseFloat(total).toFixed(2);

        //Object quote
        const newQuote = {
            total,
            data: {
                brand,
                year,
                plan
            }
        }

        //start the spinner
        setCharging(true);

        setTimeout(() => {
            //Eliminate spinner
            setCharging(false);

            //Send the info to the app
            setQuote(newQuote);

        }, 3000);



    }

    return (
        <Grid container justify="center" alignItems="center">
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom className={classes.typo}><strong>FORM</strong></Typography>
                <form onSubmit={handleSubmit}>
                    <Autocomplete
                        value={brand}
                        onChange={(event, newValue) => {
                            setBrand(newValue);
                            seterrorB(false);
                            sethelperB("");
                        }}
                        name="brand"
                        className={classes.cmb}
                        id="combo-box"
                        options={brands}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label={<strong>Brand</strong>} variant="filled" error={errorB} helperText={helperB} />}
                    />
                    <Autocomplete
                        value={year}
                        onChange={(event, newValue) => {
                            setYear(newValue);
                            seterrorY(false);
                            sethelperY("");
                        }}
                        name="year"
                        className={classes.cmb}
                        id="combo-box"
                        options={years}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label={<strong>Year</strong>} variant="filled" error={errorY} helperText={helperY} />}
                    />



                    <FormControl component="fieldset" className={classes.radioGender} error={errorP}>
                        <FormLabel component="legend" className={classes.typo} ><strong>Plan</strong></FormLabel>
                        <RadioGroup aria-label="plan" name="plan" value={plan}
                            onChange={(event) => {
                                setPlan(event.target.value)
                                seterrorP(false);
                                sethelperP("");
                            }}
                        >
                            <FormControlLabel value="basic" control={<Radio color="primary" />} label="Basic" className={classes.typo} />
                            <FormControlLabel value="complete" control={<Radio color="primary" />} label="Complete" className={classes.typo} />

                        </RadioGroup>
                        <FormHelperText className={classes.helper}>{helperP}</FormHelperText>
                    </FormControl>
                    <br />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                    >
                        <Typography variant="h6">Quote</Typography>
                    </Button>

                </form>
            </Paper>

        </Grid>


    );
};


Form.protoTypes = {
    setQuote: PropTypes.func.isRequired,
    setCharging: PropTypes.func.isRequired
};

export default Form;
