import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#26C6DA',
        borderRadius: '0px',
        width: '50%',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2),

        },
    },
    paperBlue: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: 'rgba(48, 126, 138, 0.9)',
        color: '#FFFFFF',
        borderRadius: '0px',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2),

        },
    },
    typo: {
        margin: '5px',
        color: 'black'
    },

    gridHeader: {

        width: '100%',
        margin: '0px',
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(0),

        },
    },

    helper: {
        textAlign: 'center',
    },


}));
export default useStyles;