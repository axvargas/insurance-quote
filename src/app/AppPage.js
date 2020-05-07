import React from 'react';
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Grid,

} from '@material-ui/core';

import Header from '../components/header';
import Form from '../components/form';
import Summary from '../components/summary'
import Spinner from '../components/spinner';

import useStyles from './style';

const AppPage = ({ setQuote, quote, charging, setCharging }) => {

    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <MuiThemeProvider theme={theme}>
            <Grid container justify="center" spacing={0} className={classes.grid}>
                <Grid item xs={12} >

                    <Header title="Insurance Quote" />

                </Grid>
                <Grid item xs={12} >

                    <Form setQuote={setQuote} setCharging={setCharging} />

                </Grid>
                {charging ? <Spinner /> : null}

                {quote.data && !charging &&
                    <Grid item xs={12} >

                        <Summary quote={quote} />

                    </Grid>
                }


                

            </Grid>
        </MuiThemeProvider>
    );
}

export default AppPage;

